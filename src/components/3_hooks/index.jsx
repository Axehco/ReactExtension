import React from 'react'
import ReactDOM from 'react-dom'

/* export default class Demo extends React.Component {
  state = { count: 0 }

  addfunc = () => {
    // this.setState({count: this.state.count + 1})
    this.setState(state => ({ count: state.count + 1 }))
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  show = () => {
    console.log(this.showinfo.value)
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        当前求和为： {this.state.count}
        <input ref={c => this.showinfo = c} type="text" placeholder='提示内容' />
        <button onClick={this.addfunc}>加1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
}
 */

function Demo() {
  // console.log('demo调用1+n次')

  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('tom')
  const myRef = React.useRef()

  function addfunc() {
    // setCount(count + 1)
    setCount((count) => {return count + 1})
  }

  function changeName() {
    setName(name => 'jaclk')
  }

  // 卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    console.log(myRef.current.value)
  }

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
        <div>当前求和为： {count}</div>
        <div>名字为： {name}</div>
        <input type="text" ref={myRef} placeholder='XXX ' />
        <button onClick={addfunc}>加1</button>
        <button onClick={changeName}>改名</button>
        <button onClick={unmount}>卸载组件</button>
        <hr />
        <button onClick={show}>点击提示数据</button>
      </div>
  )
}

export default Demo