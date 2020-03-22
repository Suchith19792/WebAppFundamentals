import React, {useState} from 'react'
import ReactDOM from 'react-dom'



const Button = (props) => {
  
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>          
  )
}

const History = ({allClicks}) => {
  if(allClicks.length === 0){
    return(
      <div>Press a button to start recording</div>
    )
  }
  return(
    <div>Button press history: {allClicks.join(' ')}</div>
  )
}

const App = () => {
  const [clicks,setClicks] = useState({left:0,right:0})
  const [allClicks,setAll] = useState([])

  const incLeft = () => {
    setClicks({...clicks,left: clicks.left+1})
    setAll(allClicks.concat('L'))
  }
  const incRight = () => {
    setClicks({...clicks,right: clicks.right+1})
    setAll(allClicks.concat('R'))
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={incLeft} text="left"/>
      <Button handleClick={incRight} text="right"/>
      {clicks.right}
      <History allClicks={allClicks}/>
    </div>
  )
}


ReactDOM.render(<App />, 
document.getElementById('root'))
