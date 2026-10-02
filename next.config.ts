import type { NextConfig } from "next";

/**
 * 정적 사이트(out/)로 export — GitHub Pages 등 정적 호스팅에 그대로 올릴 수 있다.
 *
 * GitHub Pages 프로젝트 페이지(https://hblue1.github.io/leejimin/)처럼 하위 경로에
 * 배포할 때는 빌드 시 `BASE_PATH=/leejimin` 을 지정한다 (.github/workflows/deploy.yml).
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
