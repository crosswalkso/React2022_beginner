import logo from "./logo.svg";
import "./App.css";

// Component, 사용자 정의 태그
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href="{'/read/'+t.id}">{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

// 간편해진 App
function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      {/* 간단한 prop 전달 */}
      <Header title="WEB" />
      {/* 복잡한 prop 전달 */}
      <Nav topics={topics} />
      {/* 간단한 prop 전달 */}
      <Article title="Welcome" body="Hello, WEB" />
    </div>
  );
}

export default App;