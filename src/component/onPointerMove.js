import React, { useState } from 'react'

export default function OnPointerMove() {
  const [pointer, setPointer] = useState({x:0,y:0})
  return (
    <>
        <div style={{
          position : 'relative',
          width : '100vw',
          height : '100vh'
        }} onPointerMove={(e) => {
          setPointer({x : e.clientX, y :  e.clientY})
        }}>
          <div
            style={{
              height : 20,
              width : 20,
              position : 'absolute',
              borderRadius : '50%',
              backgroundColor : 'purple',
              transform : `translate(${pointer.x}px, ${pointer.y}px)`,
              transitionDelay : 10,
              left : -10,
              top : -10
            }}
          >

          </div>
        </div>
    </>
  )
}
