import Light from './Light'
// import { useTrafficLight } from "react-hooks-helper";
import React, { useState, useEffect } from 'react'

// const lightDurations = [1000, 2000, 4000]

type TrafficLightProps = {
  lightActive: string
}

const colors = ['Red', 'Yellow', 'Green']

const TrafficLight = (props: TrafficLightProps) => {
  // const [colorIndex, setColorIndex] = useState<number>(props.initIndex)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setColorIndex((colorIndex + 2) % 3)
  //   }, lightDurations[colorIndex])
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // })
  const { lightActive } = props

  return (
    <div className="traffic-light">
      {colors.map((color) => (
        <Light
          key={color}
          color={color}
          active={color === lightActive}
          // isTurnedOn={color === lightColor}
        />
      ))}
    </div>

    // <div className="traffic-light">
    //   <Light color="#f00" active={colorIndex === 0} />
    //   <Light color="#ff0" active={colorIndex === 2} />
    //   <Light color="#0c0" active={colorIndex === 1} />
    // </div>
  )
}

export default TrafficLight
