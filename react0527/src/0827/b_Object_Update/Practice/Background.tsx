import React from 'react'

interface BackgroundProps {
  position: {
    x: number;
    y: number;
  }
}

export default function Background({ position }: BackgroundProps) {
  return (
    <div style={{
      position: 'relative',
      transform: `translate(
        ${position.x}px,
        ${position.y}px
        )`,
        width: 300,
        height: 300,
        backgroundColor: 'rgba(201, 201, 0, 0.2)'
    }}/>
  )
}
