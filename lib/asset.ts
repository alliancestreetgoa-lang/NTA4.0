// Prefix a local public asset with the deployment base path so it resolves
// correctly under GitHub Pages (e.g. /NTA4.0/logo.png) and in local dev.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
