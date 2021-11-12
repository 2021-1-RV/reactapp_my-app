import React from 'react'
import IndexRestapp from './indexRestapp'
import IndexRestapp2 from './indexRestapp2'
import IndexContainer from './mainContainer/indexContainer'

function IndexMain() {
  return (
    <div>
      <IndexRestapp></IndexRestapp>
      <IndexContainer></IndexContainer>
      <IndexRestapp2></IndexRestapp2>
    </div>
  )
}

export default IndexMain
