# JSX 简介

[中文](https://zh-hans.reactjs.org/docs/introducing-jsx.html)  
[english](https://reactjs.org/docs/introducing-jsx.html)

## JSX，是一个 JavaScript 的语法扩展

```js
const element = <h1>Hello, world!</h1>;
```

## 在 JSX 中嵌入表达式

**示例 1**

```js
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

**示例 2**

```js
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;
```

## JSX 也是一个表达式

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## JSX 中指定属性

```js
const element = <a href="https://www.reactjs.org"> link </a>;
const element = <img src={user.avatarUrl}></img>;
```

##
