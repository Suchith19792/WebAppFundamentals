import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <p>{props.course}</p>
    )
}

const Content = (props) => {
    return(
        <p>{props.part} {props.ex_cnt}</p>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.total}</p>
    )

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course}/>
      <Content part={part1} ex_cnt={exercises1}/>
      <Content part={part2} ex_cnt={exercises2}/>
      <Content part={part3} ex_cnt={exercises3}/>
      
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))