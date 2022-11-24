import React from 'react'

const Light = (props: TrafficLightProps) => (
  <div
    className="light"
    style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.4 }}
  />
)

export declare interface TrafficLightProps {
  color: string
  active: boolean
}

export default Light
