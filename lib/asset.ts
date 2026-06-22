// Prefix a local (public/) asset path with the deployment base path.
// On GitHub Pages the site is served under /<repo>, and next/image does not
// auto-prepend basePath to local sources in a static export — so do it here.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path; // leave absolute URLs untouched
  return `${BASE}${path}`;
}
