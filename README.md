# React2022_beginner

- 생활코딩 리액트 입문자 강의

# 1. 수업소개
## React
- 복잡한 태그를 하나의 부품으로 만들어 사용자끼리 공유하며 사용할 수도 있다.
### function React를 다룬다.

# 2. 실습환경구축

```
npx create-react-app .
or
npx create-react-app app_name

npm start
기본적으로 3000번 포트를 주지만 사용하고 있다면 3001 이런걸 준다.
```
# 3. 소스코드수정방법
## npm start
### index.js
- 기본, 전역적인 설정을 하며 UI 수정

## 베포
- `npm run build`
- `npm serve -s build`  
build 폴더에 있는 index.html을 서비스 하는 웹서버 실행

# 4. 컴포넌트 만들기
## React는 사용자 정의 태그를 만드는 기술이다.
- Component라고 부른다.  
이 강의는 `function`을 사용해서 만든다.
```js
function Capital () {
    return (
        // html tag
    );
}
```

# 5. props
### Component에 속성(prop)을 장착하자.
``` js
<Component/>

<img src="img.jpg" width="100" height="100">
```
React에서 속성을 PROP이라고 부른다. ex) 여기선 title, id, body 이런 것들

## props 전달

### 1. 중괄호 출력
```js
<Header title="WEB" />
```
```js
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}
```
- 중괄호가 없으면 텍스트만 나온다.
- **중괄호**를 치면 표현식으로 취급돼서 그것이 출력되며, 전달할 때도 사용한다.
### 2. 중괄호 전달
```js
function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Nav topics={topics} />
    </div>
  );
}
```
- topics를 전달한다.
```js
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
```
전달받은 topics prop을 처리한 후 lis를 출력한다.

### 참고: key
react는 자동으로 생성한 태그의 경우 이들을 추적할 근거로 key라는 prop을 부여하여 리액트가 성능을 높이고 정확한 동작을 하는데 도움을 준다.

# 6. 이벤트
- 컴포넌트에 이벤트를 넣고 싶다면?
```js
<input type="button" onclick="alert('hi')">
```
## 사용자의 경우
### prop(onChangeMode)을 전달한다.
- #### value가 function인 prop
- prop을 생성하는데 value로 function을 준다.
```js
<Header
    title="WEB"
    onChangeMode={function () {
        alert("Header");
        }
    }
/>
```
## 컴포넌트의 경우
### onClick 이벤트
- 컴포넌트에 이벤트(onClick) 기능을 적어준다.
```js
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
```
- a 태그는 유사 html은 아니고 리액트가 브라우저에 컨버팅할 때 html로 바꿔준다.
- 이벤트(onClick) 값에는 함수를 적어준다.
- function의 첫번째 argument인 event 객체는 적어주지 않아도 되는데, 이벤트 상황을 제어할 수 있는 여러 기능을 사용할 때는 적어준다.
- 함수를 호출할 때는 괄호를 적어준다.
