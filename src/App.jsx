import { useState } from 'react'
import './App.css'
import Cat from "./components/cat"

function App() {

    const [position,setPosition]=useState({x:10,y:20})
    function clickerX(){
      setPosition({...position,x:position.x+10})
      console.log(position)
    }
    function clickerY(){
      setPosition({...position,y:position.y+10})
      console.log(position)
    }

  return (
    <>
      <Cat birdPosition={position}/>
      <button onClick={clickerX}>Horizontal</button>
      <button onClick={clickerY}>Vertical</button>
    </>
  )
}

export default App
