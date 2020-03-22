import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => <div>{counter}</div>


const Button = (props) => {
  
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>          
  )
}

const App = (props) => {
  const [counter,setCounter] = useState(0)
  
  const incOne = () => setCounter(counter+1)
  const setZero = () => setCounter(0)
  const decOne = () => setCounter(counter-1)
  
  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={incOne} text="plus"/>
      <Button handleClick={setZero} text="zero"/>
      <Button handleClick={decOne} text="minus"/>
    </div>
  )
}


ReactDOM.render(<App />, 
document.getElementById('root'))
