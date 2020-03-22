import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {return (<h2>{text}</h2>)}

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const Statistic = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value.toFixed(2)}</td>
    </tr>
  )
}
const Statistics  = (props) => {
  let g = props.value[0]
  let n = props.value[1]
  let b = props.value[2]
  let all = g+n+b
  let avg = (g-b)/all
  let percGood = g/all*100
  //console.log(props)
  //console.log("total",all)
  if(all===0){
    return(
      <div>No feedback given</div>
    )
  }
  return(
      <table>
        <thead>
        <Statistic text="good " value={g}/>
        <Statistic text="neutral " value={n}/>
        <Statistic text="bad " value={b}/>
        <Statistic text="all " value={all}/>
        <Statistic text="average " value={avg}/>
        <Statistic text="positve " value={percGood}/>
        </thead>
      </table>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incGood = () => setGood(good+1)
  const incNeutral = () => setNeutral(neutral+1)
  const incBad = () => setBad(bad+1)

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={incGood} text="good"/>
      <Button handleClick={incNeutral} text="neutral"/>
      <Button handleClick={incBad} text="bad"/>      
      <Header text="statistics"/>
      <Statistics value={[good,neutral,bad]}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)