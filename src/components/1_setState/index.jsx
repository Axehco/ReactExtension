import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count: 0}

  // 对象式的写法
  addfunc = () => {
    const {count} = this.state
    // 这个回调函数里面，能拿到最新的值
    this.setState({count: count + 1}, () => {
      console.log('@ ', this.state.count)
    })
    console.log(this.state.count)
  }

  // 函数式的写法
  subfunc = () => {
    /* this.setState((state, props) => {
      console.log(state, props)
      return {count: state.count - 1}
    }) */

    // 简写：
    this.setState(state => ({count: state.count - 1}))
  }

  render() {
    return (
      <div>
        当前求和为： {this.state.count}
        <hr />
        <button onClick={this.addfunc}>点我加1</button>
        <hr />
        <button onClick={this.subfunc}>点我减1</button>
      </div>
    )
  }
}
