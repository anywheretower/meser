import { NextResponse } from "next/server";

/* ── Rate Limiter (in-memory, per-IP) ── */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10; // per window

export function rateLimit(request: Request): NextResponse | null {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return null;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta en 1 minuto." },
      { status: 429 }
    );
  }

  return null;
}

// Cleanup stale entries every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of rateLimitMap) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }, 300_000);
}

/* ── CSRF Protection (Origin check) ── */

export function csrfCheck(request: Request): NextResponse | null {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const allowedOrigins = [
    "https://www.meser.cl",
    "https://meser.cl",
    process.env.NEXT_PUBLIC_BASE_URL,
  ].filter(Boolean);

  // In development, allow localhost
  if (process.env.NODE_ENV === "development") return null;

  const source = origin || referer;
  if (!source) {
    // C44: In-app browsers (Instagram, Facebook, TikTok) may not send origin/referer.
    // Allow if Content-Type is application/json (not sent by plain HTML forms).
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return null;
    }
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const isAllowed = allowedOrigins.some((allowed) => source.startsWith(allowed!));
  if (!isAllowed) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return null;
}

/* ── HTML Sanitization ── */

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
