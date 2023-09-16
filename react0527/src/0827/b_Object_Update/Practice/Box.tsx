import React, { useState, ReactNode } from 'react'

interface BoxProps {
  children: ReactNode;
  color: string;
  position: { x: number; y: number };
  onMove: (dx: number, dy: number) => void;
}

export default function Box({
  children,
  color,
  position,
  onMove,
}: BoxProps) {
  const [lastCoordinate, setLastCoordinate] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // 마우스를 클릭했을 때 이벤트 핸들러
  function handlePointerDown(e: React.PointerEvent) {
    const target = e.target as HTMLElement;    
    target.setPointerCapture(e.pointerId);
    setLastCoordinate({
      x: e.clientX,
      y: e.clientY,
    })
  }

  // 마우스를 움직였을 떄 이벤트 핸들러
  function handlePointerMove(e: React.PointerEvent) {
    if(lastCoordinate) {
      setLastCoordinate({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinate.x;
      const dy = e.clientY - lastCoordinate.y;
      onMove(dx, dy)
    }
  }

  // 마우스를 땠을 때 이벤트 핸들러
  function handlePointerUp(e: React.PointerEvent) {
    setLastCoordinate(null);
  }

  return (
    <div 
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px`
      }}
      >

        {children}

    </div>
  )
}
