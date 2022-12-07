# 组件 & Props

[中文](https://zh-hans.reactjs.org/docs/components-and-props.html) 
[english](https://reactjs.org/docs/components-and-props.html)

## 注意点

注意： 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

## Props 的只读性

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
