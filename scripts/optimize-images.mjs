#!/usr/bin/env node
/**
 * 기존 포트폴리오(정적 사이트)의 이미지를 최적화해 src/assets 로 가져온다.
 *
 *   node scripts/optimize-images.mjs <기존 사이트 폴더>
 *
 * - 사진류(jpg / 큰 png)  → WebP (최대 폭 1400px, 품질 80)
 * - 작은 로고·장식 png    → 그대로 복사
 * - 배경 영상             → public/video 로 복사
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2];
if (!SRC) {
  console.error("usage: node scripts/optimize-images.mjs <legacy-site-dir>");
  process.exit(1);
}
const ROOT = process.cwd();

/** [원본 경로, 저장 경로, 변환 여부] */
const FILES = [
  ["img/topbg.jpg", "src/assets/img/topbg.webp", true],
  ["img/one.png", "src/assets/img/one.png", false],
  ["img/tw.png", "src/assets/img/tw.png", false],
  ["img/tr.png", "src/assets/img/tr.png", false],
  ["img/mx.png", "src/assets/img/mx.png", false],
  ["img/stu.png", "src/assets/img/stu.webp", true],
  ["img/stu3.png", "src/assets/img/stu3.webp", true],
  ["img/stu4.png", "src/assets/img/stu4.webp", true],
  ["img/filament.png", "src/assets/img/filament.png", false],
  ["img/yjel.png", "src/assets/img/yjel.png", false],
  ["img/lamp.png", "src/assets/img/lamp.png", false],
  ["img/jQuery/logo1.png", "src/assets/img/jquery-logo.png", false],
  ["img/favicon-16x16.png", "src/app/icon.png", false],
];

for (const dir of ["sns", "cf", "did", "pa", "om"]) {
  for (const f of await fs.readdir(path.join(SRC, "img2", dir))) {
    const base = f.replace(/\.[^.]+$/, "");
    FILES.push([`img2/${dir}/${f}`, `src/assets/work/${dir}/${base}.webp`, true]);
  }
}

let before = 0;
let after = 0;
for (const [from, to, convert] of FILES) {
  const src = path.join(SRC, from);
  const dst = path.join(ROOT, to);
  await fs.mkdir(path.dirname(dst), { recursive: true });
  before += (await fs.stat(src)).size;
  if (convert) {
    await sharp(src)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dst);
  } else {
    await fs.copyFile(src, dst);
  }
  after += (await fs.stat(dst)).size;
}

await fs.mkdir(path.join(ROOT, "public/video"), { recursive: true });
await fs.copyFile(
  path.join(SRC, "video/Typing_dark_03_Videvo.mov"),
  path.join(ROOT, "public/video/typing.mov"),
);

const mb = (n) => (n / 1048576).toFixed(1);
console.log(`images: ${FILES.length} files, ${mb(before)} MB → ${mb(after)} MB`);
