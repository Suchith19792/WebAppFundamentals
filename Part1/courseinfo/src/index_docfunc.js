import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name,age}) => {
  
  const bornYear = () => new Date().getFullYear() - age

  
    return (
      <div>
        <p>Hello {name}, you are {age} years old</p>
        <p>So, you were probably born in {bornYear()}</p>
      </div>
        
    )
}

const App = () => {
  const name = 'Suchith'
  const age = 27
  return (
    <div>
      <Hello name="Babyboo" age={age+5}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))