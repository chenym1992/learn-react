# State & 生命周期

[中文](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
[english](https://reactjs.org/docs/state-and-lifecycle.html)

## 正确地使用 State

关于 setState() 你应该了解三件事：

### 不要直接修改 State

例如，此代码不会重新渲染组件：

```js
// Wrong
this.state.comment = "Hello";
```

而是应该使用 setState():

```js
// Correct
this.setState({ comment: "Hello" });
```

构造函数是唯一可以给 this.state 赋值的地方。

### State 的更新可能是异步的

出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。

因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。

例如，此代码可能会无法更新计数器：

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}));
```

### State 的更新会被合并

当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。  
例如，你的 state 包含几个独立的变量：

```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

然后你可以分别调用 setState() 来单独地更新它们：

```js
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```

这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。

## 数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。
