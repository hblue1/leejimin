/**
 * `public/` 파일 경로에 basePath 를 붙인다.
 * (GitHub Pages 하위 경로 배포 시 /leejimin 등 — next.config.ts 참고)
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
