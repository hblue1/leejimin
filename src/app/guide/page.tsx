import type { Metadata } from "next";
import type { ReactNode } from "react";
import styles from "./guide.module.css";

export const metadata: Metadata = {
  title: "Web Publishing Guide | Lee Ji Min",
};

/** 짧은 코드 표기 */
function C({ children }: { children: ReactNode }) {
  return <code className={styles.code}>{children}</code>;
}

const ENV: [string, ReactNode][] = [
  ["프레임워크", "Next.js (App Router) · React"],
  ["언어", "TypeScript (strict)"],
  ["스타일", "CSS Modules + 전역 리셋(globals.css)"],
  ["빌드·배포", "정적 export(out/) → GitHub Actions → GitHub Pages"],
  ["인코딩", "UTF-8"],
  ["지원 브라우저", "최신 Chrome · Edge · Safari · Firefox, 모바일 Safari · Chrome"],
];

const FOLDERS: [ReactNode, string][] = [
  [<C key="a">src/app</C>, "페이지·레이아웃 (라우트 = 폴더), 전역 스타일"],
  [<C key="b">src/components</C>, "화면 섹션·공통 컴포넌트 (.tsx + .module.css 한 쌍)"],
  [<C key="c">src/assets</C>, "import 해서 쓰는 이미지 (빌드 시 경로·크기 처리)"],
  [<C key="d">src/lib</C>, "공통 유틸 함수"],
  [<C key="e">public</C>, "그대로 서빙하는 파일 (영상, 레거시 데모)"],
  [<C key="f">scripts</C>, "이미지 최적화 등 개발용 스크립트"],
];

const NAMING: [string, ReactNode][] = [
  ["컴포넌트 파일·이름", <>PascalCase — <C>Hero.tsx</C>, <C>ScrollProgress.tsx</C></>],
  ["스타일 파일", <>컴포넌트명 + <C>.module.css</C> — <C>Hero.module.css</C></>],
  ["CSS 클래스", <>camelCase — <C>.faceImg</C>, <C>.groupTitle</C></>],
  ["함수·변수", <>camelCase — <C>asset()</C>, <C>barRef</C></>],
  ["상수 데이터", <>UPPER_SNAKE_CASE — <C>SKILLS</C>, <C>DESIGN_GROUPS</C></>],
  ["이미지 파일", <>소문자·하이픈 — <C>jquery-logo.png</C>, <C>topbg.webp</C></>],
];

const BREAKPOINTS: [string, string][] = [
  ["PC", "1101px 이상 — 기준 디자인"],
  ["태블릿", "1100px 이하 — 3단 유지, 여백·글자 크기 비율 축소"],
  ["모바일", "750px 이하 — 1단 세로 배치, 가운데 정렬"],
  ["소형 모바일", "500px 이하 — 카드·이미지 1열"],
];

/** 퍼블리싱 가이드 — 현재 포트폴리오(Next.js) 작업 기준 */
export default function GuidePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Web Publishing Guide</h1>
      </header>
      <main className={styles.wrap}>
        <h2 className={styles.first}>1.기본정책</h2>
        <p className={styles.lead}>
          모든 사람이 기기와 환경의 제약 없이 콘텐츠에 접근할 수 있도록, 웹 표준·웹 접근성·반응형을
          지키는 컴포넌트 기반 마크업 방법을 기술한다.
        </p>

        <h3>프로젝트 환경</h3>
        <table className={styles.table}>
          <tbody>
            {ENV.map(([k, v]) => (
              <tr key={k}>
                <th scope="row">{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>폴더 규칙</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">폴더</th>
              <th scope="col">용도</th>
            </tr>
          </thead>
          <tbody>
            {FOLDERS.map(([k, v], i) => (
              <tr key={i}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>이름 규칙</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">대상</th>
              <th scope="col">규칙</th>
            </tr>
          </thead>
          <tbody>
            {NAMING.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className={styles.mid}>
          <h2>2.마크업 (JSX)</h2>
          <ol className={styles.numbered}>
            <li>
              화면은 의미 단위 섹션 컴포넌트로 나눈다.
              <ul>
                <li>예) Hero · Profile · Keywords · Works · DesignWorks · Outro · Footer</li>
                <li>페이지(page.tsx)는 섹션을 조합만 하고, 마크업·스타일은 각 컴포넌트가 가진다.</li>
              </ul>
            </li>
            <li>
              시맨틱 요소를 사용한다.
              <ul>
                <li>
                  <C>header</C> 머리글 · <C>main</C> 본문 · <C>section</C> 주제 영역 ·{" "}
                  <C>footer</C> 바닥글
                </li>
                <li>제목은 h1 → h2 → h3 순서를 지키고, 페이지당 h1 은 하나만 둔다.</li>
                <li>표 형태의 정보는 div 대신 <C>table</C> 과 <C>th scope</C> 로 작성한다.</li>
              </ul>
            </li>
            <li>
              클릭 요소는 용도에 맞는 태그를 쓴다.
              <ul>
                <li>페이지 이동은 <C>a</C>(외부) 또는 <C>Link</C>(내부), 동작은 <C>button</C>.</li>
                <li>
                  <C>div onClick</C>, <C>href=&quot;#&quot;</C> 처럼 이동하지 않는 링크는 쓰지 않는다.
                </li>
                <li>
                  새 창 링크에는 <C>rel=&quot;noopener noreferrer&quot;</C> 를 붙이고, 새 창임을
                  aria-label 등으로 알린다.
                </li>
              </ul>
            </li>
            <li>
              반복되는 목록(스킬·경력·작업물)은 데이터 배열로 분리하고 <C>map</C> 으로 렌더링하며,
              고유한 <C>key</C> 를 지정한다.
            </li>
            <li>
              브라우저 API(스크롤·마우스·IntersectionObserver)를 쓰는 컴포넌트에만{" "}
              <C>&quot;use client&quot;</C> 를 선언하고, 나머지는 서버 컴포넌트로 둔다.
            </li>
            <li>들여쓰기는 공백 2칸, 속성값은 큰따옴표(&quot; &quot;)로 묶는다.</li>
            <li>주석은 &quot;왜 이렇게 했는지&quot;를 적고, 코드만 보고 알 수 있는 설명은 생략한다.</li>
          </ol>

          <h2>3.스타일 (CSS)</h2>
          <ol className={styles.numbered}>
            <li>
              컴포넌트 스타일은 CSS Modules 로 작성해 클래스 충돌을 막는다. 전역 스타일은 리셋·폰트·공통
              규칙만 <C>globals.css</C> 에 둔다.
            </li>
            <li>
              전체 선택자 <C>*</C> 는 <C>box-sizing</C> 리셋에만 사용하고 그 외 스타일에는 쓰지 않는다.
            </li>
            <li>id 선택자로 스타일을 지정하지 않는다.</li>
            <li>색상·폰트는 디자인 기준값을 그대로 사용한다. (예: 포인트 #4d43da, 진행바 red, 폰트 Roboto · Nanum Gothic · Noto Sans KR)</li>
            <li>축약형 속성(margin, padding, background 등)을 사용할 수 있을 때는 축약형을 사용한다.</li>
            <li>
              z-index 는 꼭 필요한 곳에만 쓰고, 장식 요소는 <C>isolation: isolate</C> 로 영역 안에서
              겹침 순서를 해결한다.
            </li>
            <li>애니메이션은 <C>transform</C> · <C>opacity</C> 만 사용해 레이아웃 재계산을 피한다.</li>
          </ol>

          <h2>4.반응형</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">구간</th>
                <th scope="col">기준</th>
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ol className={styles.numbered}>
            <li>PC 기준으로 작성하고 <C>max-width</C> 미디어쿼리로 구간별 변경 사항만 덮어쓴다.</li>
            <li>고정 px 대신 %, vw, max-width 를 사용해 구간 사이에서도 자연스럽게 줄어들게 한다.</li>
            <li>모든 구간에서 가로 스크롤이 생기지 않아야 한다.</li>
            <li>모바일에서 콘텐츠를 숨기지 않고, 배치(1단·가운데 정렬)와 크기로 대응한다.</li>
            <li>viewport 메타는 확대를 막지 않는다. (user-scalable=no 사용 금지)</li>
          </ol>

          <h2>5.이미지 · 폰트 · 영상</h2>
          <ol className={styles.numbered}>
            <li>
              사진은 WebP 로 변환하고 최대 폭 1400px 로 줄인다. 작은 로고·장식은 PNG 를 유지한다.
              (<C>scripts/optimize-images.mjs</C>)
            </li>
            <li>
              이미지는 <C>src/assets</C> 에서 import 해 <C>next/image</C> 로 넣는다. 크기가 자동 지정되어
              로딩 중 레이아웃이 흔들리지 않는다.
            </li>
            <li>첫 화면 밖의 이미지는 지연 로딩(lazy)한다.</li>
            <li>
              의미 있는 이미지에는 내용을 설명하는 alt 를, 장식 이미지에는 빈 alt 와{" "}
              <C>aria-hidden</C> 을 지정한다.
            </li>
            <li>웹폰트는 <C>next/font</C> 로 불러와 자체 호스팅하고, <C>display: swap</C> 으로 글자가 늦게 보이는 것을 막는다.</li>
            <li>배경 영상은 <C>muted</C> · <C>playsInline</C> · <C>preload=&quot;metadata&quot;</C> 로 넣어 모바일에서도 자동 재생되게 한다.</li>
          </ol>

          <h2>6.인터랙션 · 애니메이션</h2>
          <ol className={styles.numbered}>
            <li>
              스크롤 등장 효과는 스크롤 위치 숫자를 하드코딩하지 않고, 요소가 화면에 들어올 때
              IntersectionObserver 로 실행한다. (<C>Reveal</C> 컴포넌트)
            </li>
            <li>
              스크롤·마우스 이벤트는 <C>requestAnimationFrame</C> 으로 묶어 프레임당 한 번만 갱신하고,
              스크롤 이벤트는 <C>passive</C> 로 등록한다.
            </li>
            <li>호버 효과는 CSS 로 작성하고, 키보드 사용자를 위해 <C>:focus-visible</C> 에도 같은 효과를 준다.</li>
            <li>
              사용자가 &quot;동작 줄이기&quot;를 설정한 경우(<C>prefers-reduced-motion</C>) 애니메이션을
              끄고 바로 표시한다.
            </li>
            <li>이벤트 리스너·옵저버는 컴포넌트가 사라질 때 반드시 해제한다.</li>
          </ol>

          <h2>7.빌드 · 배포</h2>
          <ol className={styles.numbered}>
            <li><C>npm run dev</C> 로 개발하고, 배포 전 <C>npm run build</C> 로 타입 검사와 빌드를 확인한다.</li>
            <li>정적 사이트(out/)로 export 하므로 서버 기능(API, 서버 액션)은 사용하지 않는다.</li>
            <li>
              GitHub Pages 하위 경로 배포를 위해 <C>BASE_PATH</C> 를 사용하며, public 파일 경로는{" "}
              <C>asset()</C> 함수로 감싼다.
            </li>
            <li><C>main</C> 브랜치에 push 하면 GitHub Actions 가 빌드 후 자동 배포한다.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
