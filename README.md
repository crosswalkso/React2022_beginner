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
- prop 이름은 onChangeMode가 아닌 ff로 하든 뭘 하든 작동함.
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

## 사용자가 prop function에 argument를 전달할 경우
### 입력값 전달
```js
<Nav topics={topics} 
     onChangeMode={(id) => {
          alert(id);
}}
/>
```
- Nav 컴포넌트에 id라는 인자를 주고 있다.  
인자로 전달할 때는 id가 아니라 _id여도 되는데...
### 컴포넌트의 경우
```js
function Nav(props) {
    ...
    lis.push(
      ...
        <a
          id={t.id}
          ...
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
        ...
}
```
- 여기서는 a태그에 id를 부여해준다.  
다른 이름을 부여하면 undefined가 뜬다.  
방법 중 하나일 뿐 다른 방법도 있다.
#### target
```js
<a id="3" href="{'/read/'+t.id}">javascript</a>
```
- event 객체가 갖고 있는 속성?
- 이벤트를 유발시킨 태그(a tag)를 가리킨다.
- a 태그가 가지고 있는 id 값을 가져오면 된다.
- id는 target이 가지고 있는 속성으로, idx 이런걸 적게 되면 prop attribute 등 이상한 경로로 들어가서 특별한 속성이라 보면 될 듯 싶다.

# 7. state
### prop and state
- prop: component 사용자(외부)를 위함
- state: component 만드는 내부자를 위함

## state

### useStete hook
- hook: react에서 제공하는 기본적인 함수
- 일반 지역변수였던 mode를 state 상태로 바꿔서 값이 변할 수 있음
- #### 배열 return  
```js
const [mode, setMode] = useState(arg);
```
```
mode: state value, 변화하는 값
setMode: function, 변화시키는 함수
인자: state value 초기값
```
- 기본적으로 App 함수는 한 번만 실행되기 때문에 Header, Nav를 클릭해줘도 값의 변화가 없다.
- #### setMode로 인해 값이 바뀌면 App Component가 다시 실행되어 새로운 값을 화면에 렌더링 해준다.

- 입력한 값은 숫자였어도 태그의 속성으로 넘기면 문자가 된다.
- Number로 타입변환을 해준다.
### Nav
```js
<a
    id={t.id}
    href="{'/read/'+t.id}"
    onClick={(event) => {
    event.preventDefault();
    props.onChangeMode(Number(event.target.id));
    }}
>
```
### Header Component - event, state
#### 1. Header를 클릭하면 onClick -> onChangeMode() 함수 실행
```js
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a>
      </h1>
    </header>
  );
}
```
#### 2. onChangeMode(), setMode가 설치되어 있다.
```js
<Header title="WEB" onChangeMode={() => setMode("WELCOME")} />
```
#### 3. state value 변경, mode 값이 WELCOME으로 바뀐다.
```js
const [mode, setMode] = useState("default");
```

# 8. Create
## mode의 값을 바꿔 새로운 UI가 나타나도록
#### 1. onClick -> mode=CREATE로 변경, Create content가 나타남.
#### 2. onSubmit -> onCreate 실행, newTopic 추가됨

## Create Component 분석
```js
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      // form
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // target
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}
```
### form
어떤 정보를 서버로 전송할 때 쓰는 태그
### textarea
여러 줄 표시

### [callback 함수](https://velog.io/@ko1586/Callback%ED%95%A8%EC%88%98%EB%9E%80-%EB%AD%94%EB%8D%B0)
- 1. 다른 코드의 인수로서 넘겨주는 실행 가능한 코드 -> 다른 함수가 실행을 끝낸 뒤 실행됨
- 2. 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수
- ex) onCreate, 버튼을 클릭했을 때 발생할 것이다.
### onSubmit prop
- submit 클릭시 form에서 발생하는 이벤트

렌더링 문제
다른 데이터만 렌더링 해 줌
...로 복제 (object, array)

### target
onSubmit 이벤트가 발생한 태그를 가져옴
```js
<form>
    <p>...</p>
    <p>...</p>
    <p>...</p>
</form>
```
event.target.name / name을 가진 태그
```js
<input type="text" name="title" placeholder="title">
```
event.target.name.value / 태그의 밸류값

## STATE primitive vs object
- #### 같은 데이터는 렌더링 되지 않는다.
### primitive
- string, number, boolean ...
```js
const[value, setValue] = useState(1); // 1
setValue(2); // 1 vs 2 -> different, 작동
```

### object(범객체)
- object, array ...
- #### 복제본을 수정해서 원본과 비교해야 한다.
- object: {...value}, array: [...value]
```js
const [value, setValue] = useState([1]); // [1]
value.push(2); // [1,2]
setValue(value); // [1,2] vs [1,2] -> same, 작동 X

newValue=[...value]; // 복제 [1]
newValue.push(2); // [1,2]
setValue(newValue); // [1] vs [1,2] -> different, 작동
```

### 9. Update
- 기존의 내용(title, body)을 가지고 있어야 한다.
```js
else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {}} />;
  }
```
### {props.name} 사용자가 전달한 값으로, 홈페이지에서 바꾸기 위해선 state가 필요하다.
- ## 오답
```js
<input type="text" name="title" placeholder="title" value={props.title}></input>
```
prop: 외부자가 내부로 전달  
state: 내부자가 사용하는 데이터
- props.name을 태그에 주지 말고 useState의 초기값으로 준다.
- ### state
```js
const [title, setTitle] = useState(props.title);
const [body, setBody] = useState(props.body);
<input type="text" name="title" placeholder="title" value={title}></input>
<textarea name="body" placeholder="body" value={body}></textarea>
```
- ### onChange event
- state를 바꾸기 위해 onChange를 사용한다.
- html과 다르게 값을 바꿀때마다 달라진다.