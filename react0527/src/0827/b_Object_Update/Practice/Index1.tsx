import React, { ChangeEvent, useState } from 'react'
import Background from './Background'
import Box from './Box'

const initialPosition = {
  x: 0,
  y: 0
}

export default function Index() {
  const [shape, setShape] = useState ({
    color: 'orange',
    position: initialPosition,
  })

  // shape.position을 변경시킬 경우
  // initialPosition이 가리키는 객체와 동일하기 때문에 같이 변경
  // function handleMove(dx: number, dy: number) {
  //   shape.position.x += dx;
  //   shape.position.y += dy;
  // }
  function handleMove (dx: number, dy: number) {
    setShape(prevShape => ({
      ...prevShape,
      position: {
        x: prevShape.position.x + dx,
        y: prevShape.position.y + dy
      }
    }))
  }

  function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
    setShape({
      ...shape,
      color: e.target.value
    })
  }
  return (
    <>
      <select
      value={shape.color}
      onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">Light Pink</option>
        <option value="aliceblue">Aliceblue</option>
      </select>
      <Background position={initialPosition}/>
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag Me !
      </Box>
    </>
  )
}
