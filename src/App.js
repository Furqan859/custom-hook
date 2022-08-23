import useCustomCounter from './Custom';
import React from 'react'
function App () {
  const data = useCustomCounter();
  return(
    <React.Fragment>
    <h1>count up:{data.count}</h1>
    <button type="button" onClick={data.handleIncrement}>Increment</button>
    </React.Fragment>
  )
}

export default App;