import React from 'react'
import logo from './logo.svg'
import TrafficLight from './Compoenet/TrafficLight'
import './App.css'

function App() {
  return (
    <div className="App">
      <TrafficLight initIndex={1} />
      <TrafficLight initIndex={2} />
    </div>
  )
}

export default App
