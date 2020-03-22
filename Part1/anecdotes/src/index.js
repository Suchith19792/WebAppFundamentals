import React, {useState, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points,setVote] = useState(new Array(props.anecdotes.length).fill(0))
  const randSel = () => {
    let rand = Math.floor(Math.random()*anecdotes.length)
    setSelected(rand)
  }

  const updateVote = () => {  
    const copy = [...points]
    copy[selected]+=1
    setVote(copy)
    console.log(copy,selected)
  }

  let maxIndex = points.indexOf(Math.max(...points))
  console.log(maxIndex)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={updateVote}>vote</button>
        <Button handleClick={randSel} text="next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[maxIndex]}
      <div>has {points[maxIndex]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)