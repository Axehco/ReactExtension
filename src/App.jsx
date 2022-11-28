import React, { Component, Fragment } from 'react';
// import Dome from './components/1_setState'
// import Dome from './components/3_hooks'
// import Dome from './components/4_Fragment'
// import Dome from './components/5_Context'
import Dome from './components/6_optimize'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Dome x={1}/> */}
        <Dome/>
      </Fragment>
    );
  }
}

export default App;