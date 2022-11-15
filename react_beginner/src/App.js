import logo from "./logo.svg";
import "./App.css";

// Component, 사용자 정의 태그
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

// 간편해진 App
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
