import React from 'react'

type LightProps = {
  color: string
  active: boolean
}

const Light = (props: LightProps) => (
  <div
    className="light"
    style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.4 }}
  />
)

// export declare interface TrafficLightProps {
//   color: string
//   active: boolean
// }

export default Light
