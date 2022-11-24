import Light from './Light'
// import { useTrafficLight } from "react-hooks-helper";
import React, { useState, useEffect } from 'react'

const lightDurations = [1000, 2000, 4000]

const TrafficLight = (props: initialValue) => {
  const [colorIndex, setColorIndex] = useState<number>(props.initIndex)

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3)
    }, lightDurations[colorIndex])
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="traffic-light">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  )
}

export declare interface initialValue {
  initIndex: number
}

export default TrafficLight
