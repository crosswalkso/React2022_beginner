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
React에서 속성을 PROP이라고 부른다.