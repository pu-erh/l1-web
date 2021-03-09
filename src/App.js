import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [number, updateNumber] = useState(1)
  const [students, setStudents] = useState([])


  const inc = () => {
    updateNumber(number + 1)
  }

  const dec = () => {
    updateNumber(number - 1)
  }

  const getAllStudents = async () => {
    const response = await fetch('http://localhost:4242/api/students')
    const students = await response.json()
    setStudents(students)
  }

  useEffect(() => {
    setTimeout(() => {
      getAllStudents()
    }, 3000)
  }, [])

  const displayStudents = () => {
    return (
      <p>
        There are {students.length} students :
        {students.map((student, index) => {
          return <span key={index} style={{ marginLeft: '10px' }}>{student.firstname}</span>
        })}
      </p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {displayStudents()}
        <p>{number}</p>
        <button className="m-button-increment" onClick={inc}>Increment</button>
        <button className="m-button-decrement" onClick={dec}>Decrement</button>
      </header>
    </div >
  );
}

export default App;
