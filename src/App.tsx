import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import TrafficLight from './Component/TrafficLight'
import './App.css'

const timeDuration = [1000, 2000, 4000]
const colors = ['Red', 'Yellow', 'Green']

function App() {
  const [firstLight, setFirstLight] = useState<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirstLight((firstLight) => (firstLight + 1) % 3)
    }, timeDuration[firstLight])

    return () => clearTimeout(timeout)
  }, [firstLight])

  return (
    <div className="App">
      <TrafficLight lightActive={colors[firstLight]} />
      <TrafficLight lightActive={colors[(firstLight + 2) % 3]} />
    </div>
  )
}

export default App
