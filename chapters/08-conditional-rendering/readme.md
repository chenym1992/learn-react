# 条件渲染

[中文](https://zh-hans.reactjs.org/docs/conditional-rendering.html)
[english](https://reactjs.org/docs/conditional-rendering.html)

## 与运算符 &&

请注意，falsy 表达式 会使 && 后面的元素被跳过，但会返回 falsy 表达式的值。在下面示例中，render 方法的返回值是 `<div>0</div>`。

```js
render() {
  const count = 0;
  return (
    <div>
      {count && <h1>Messages: {count}</h1>}
    </div>
  );
}
```
