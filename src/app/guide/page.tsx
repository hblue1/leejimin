import type { Metadata } from "next";
import styles from "./guide.module.css";

export const metadata: Metadata = {
  title: "Web Publishing Guide | Lee Ji Min",
};

const ENV = [
  ["문서 및 버전", "HTML5, CSS3"],
  ["인코딩", "UTF-8"],
];

const FOLDERS = [
  ["html", "html 문서"],
  ["css", "css 문서"],
  ["js", "script 문서"],
  ["img", "img 파일"],
  ["fonts", "fonts 문서"],
  ["common", "초기화 및 html 링크 관련 문서"],
];

const LAYOUT_IDS = [
  "#wrap 페이지 전체 영역",
  "#header 머리글 영역",
  "#mid or main 본문 영역",
  "#mid or bot 주요 콘텐츠 영역",
  "#footer 바닥글 영역",
];

const OBJECT_WORDS = [
  "3-1.gnb 최상위 전역 내비게이션 영역",
  "3-2.lnb 현재 서비스의 지역 내비게이션 영역",
  "3-3.snb 측면 내비게이션 영역",
  "3-4.aside 문서의 주요 부분을 표시하고 남은 콘텐츠 영역",
  "3-5.nav 내비게이션 요소",
];

const CSS_RULES = [
  "검색 엔진 최적화를 위하여 meta 요소를 이용하여 문서 제목을 추가 명시한다.",
  "어느 디스플레이에서든 최적화를 위하여 viewport를 사용한다.",
  "CSS코드는 들여쓰기를 하지않는다 .단 중괄호가 중첩되는 경우는 예외로 한다.",
  "CSS 코드의 주석은 코드 그룹을 구분하거나 참고해야 하는 사항을 기술한다.",
  "z-index 속성 값을 범위에 맞게 사용하여 객체가 브라우저에서 바르게 표현되도록 한다.",
  "최 상위 공통 선택자 '*'는 웹 페이지의 성능을 떨어뜨리고, Internet Explorer에서는 주석까지 영향을 받을 수 있으므로 사용하지 않는다.",
  "CSS의 최적화를 위하여 속성의 값을 축약하여 사용할 수 있을 때는 축약형을 사용한다.",
  "스프라이트 이미지 사용시 오류방지를 위해 이미지간 간격을 최소 1px씩 띄우도록 한다.",
  "PNG-24 > jpg 포맷을 기본으로 사용",
  "Awesome font 사용시 무거워 질수 있으므로 .PNG파일을 사용하도록 한다.",
  "파일 이름은 카멜 표기법을 사용한다.",
];

/** 퍼블리싱 가이드 (기존 html/guide/index.html) */
export default function GuidePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Web Publishing Guide</h1>
      </header>
      <main className={styles.wrap}>
        <h2 className={styles.first}>1.기본정책</h2>
        <p className={styles.lead}>
          모든 사람이 환경의 제약 없이 웹 콘텐츠에 접근할 수 있도록 보장하는 마크업 방법을
          기술한다.
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

        <h3>파일/폴더규칙</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">폴더명</th>
              <th scope="col">파일</th>
            </tr>
          </thead>
          <tbody>
            {FOLDERS.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className={styles.mid}>
          <h2>2.HTML</h2>
          <ol className={styles.numbered}>
            <li>validator 검사에서 이상 없이 통과 해야 한다.</li>
            <li>
              id는 문서 전체의 고유 식별자 이므로 한 문서에서 동일한 id를 여러 번 사용하지 않는다.
              <ol>
                <li>2-1.레이아웃을 제외한 id는 스타일을 지정하지 않는다.</li>
                <li>
                  2-2.레이아웃에는 다음 표에 예약된 id만 사용한다.
                  <ul>
                    {LAYOUT_IDS.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              객체 약속어를 사용한다.
              <ol>
                {OBJECT_WORDS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </li>
            <li>
              코드의 가독성을 높이기 위하여 들여쓰기를 사용하며 탭 1개의 크기는 공백 4칸으로
              설정한다.
            </li>
            <li>신규 HTML 문서를 작성할 때 기본 인코딩은 utf-8을 원칙으로 한다.</li>
            <li>
              HTML의 주석은 그룹의 구분이나 참고해야 할 사항을 서술한다
              <br />
              주석과 내용 사이에는 반드시 공백 한 칸이 있어야 한다
              <br />
              시작과 종료 주석 내용은 동일해야 한다.
            </li>
            <li>빈 줄의 간격은 1줄을 초과하지 않는다.</li>
            <li>애트리뷰트값은 큰따옴표(&quot; &quot;)로 묶는다.</li>
          </ol>

          <h2>3.CSS</h2>
          <ol className={styles.numbered}>
            {CSS_RULES.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
