import React from 'react'
import Zustand01 from './a_Zustand/Zustand01'
import Zustand02 from './a_Zustand/Zustand02'
import Index from './a_Zustand/User/Index'

export default function Zustand() {
  return (
    <>
      <h1 style={{backgroundColor: 'pink'}}>1015 Zustand 상태관리 라이브러리</h1>
      <Zustand01/>
      <hr />
      <h2>API 상태관리</h2>
      <Zustand02/>
      <Index />
    </>
  )
}
