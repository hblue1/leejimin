# Lee Ji Min — Design & Publishing Portfolio

기존 jQuery 기반 정적 포트폴리오를 **Next.js + React + TypeScript** 로 다시 만든 버전입니다.
디자인(레이아웃·색상·폰트·애니메이션)은 기존과 동일하게 유지하고, 반응형과 성능을 개선했습니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 정적 사이트 → out/
```

## 기존 대비 개선점

| 항목 | 기존 | 개선 |
| --- | --- | --- |
| 구조 | HTML 1장 + jQuery | React 컴포넌트 (섹션별 분리) + CSS Modules |
| 스크롤 등장 효과 | 스크롤 위치 하드코딩 (`scrollTop > 2731` 등) — 화면 크기마다 어긋남 | 요소가 화면에 들어올 때 등장 (IntersectionObserver) |
| 호버 효과 | jQuery `hover` + `slideDown` | CSS 전환 (키보드 포커스 포함) |
| 스크롤 진행바 · 마우스 패럴랙스 | 스크롤/마우스 이벤트마다 DOM 갱신 | `requestAnimationFrame` 으로 묶어서 갱신 |
| 외부 스크립트 | jQuery + jQuery UI (CDN) | 없음 |
| 이미지 | 원본 JPG/PNG 약 11.6MB | WebP 변환·리사이즈 약 1.2MB, 지연 로딩, 크기 지정(레이아웃 흔들림 방지) |
| 폰트 | Google Fonts `<link>` 3개 | `next/font` 로 자체 호스팅·preload |
| 반응형 | 고정 px·절대 위치 위주, 모바일에서 일부 섹션 숨김 | PC / 태블릿(≤1100px) / 모바일(≤750px, ≤500px) 레이아웃 |
| 접근성 | `div onclick` 카드, `href="#"` 링크 | 실제 링크(`<a>`), 장식 이미지 `aria-hidden`, 의미에 맞는 표(`<table>`), 동작 줄이기 설정 존중 |

## 구조

```
src/
├─ app/
│  ├─ page.tsx            # 메인 (섹션 조합)
│  ├─ guide/              # Publishing Guide 페이지
│  ├─ layout.tsx          # 폰트·메타데이터
│  └─ globals.css
├─ components/            # Hero / Profile / Keywords / Works / DesignWorks / Outro / Footer
│                         # Reveal(스크롤 등장) · ScrollProgress(진행바)
└─ assets/                # 최적화된 이미지 (scripts/optimize-images.mjs)
public/
├─ video/                 # 키워드 섹션 배경 영상
└─ legacy/                # jQuery 작업물 데모 (원본 그대로)
```

## 배포 (GitHub Pages)

`main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 빌드해서 배포합니다.
처음 한 번 저장소 **Settings → Pages → Source** 를 **GitHub Actions** 로 바꿔야 합니다.
