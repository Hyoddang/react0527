import React from 'react'
import PreserveReset01 from './b_Preserve_Reset/PreserveReset01'
import PracticePreserveReset from './b_Preserve_Reset/PracticePreserveReset'
import PreserveReset02 from './b_Preserve_Reset/PreserveReset02'
import PreserveReset03 from './b_Preserve_Reset/PreserveReset03'

export default function PreserveReset() {
  return (
    <>
      <h1 style={{ backgroundColor: 'pink'}}>0910 상태 보존 및 재설정</h1>
      <PreserveReset01/>
      <h1 style={{ backgroundColor: 'pink'}}>0916 상태 보존 및 재설정</h1>
      <PracticePreserveReset/>
      <br />
      <PreserveReset02/>
      <br />
      <h2>useState를 사용한 상태관리</h2>
      <PreserveReset03/>
    </>
  )
}
