import React, { ReactElement } from 'react'

// 순수 함수는 함수의 범위 밖에서 변수나 호출 이전에 생성된 객체를 변이시키지 않는다.

// 렌더링 하는 동안 방금 만든 변수와 객체를 변경
// - 배열 사용

//! 컴포넌트의 순수성
// - 렌더링하기 전에 이미 존재하는 객체, 변수 변경 X
// - 같은 입력이 주어지면 컴포넌트는 항상 돌일한 JSX를 반환 !
// - 변경된 값을 컴포넌트에 지정하고 싶은 경우 이벤트 핸들러를 사용

interface CupProps {
  guest: number;
}

function Cup ({ guest }: CupProps) {
  return <h2>Tea cup for guest {guest}</h2>
}

// 렌더링되는 함수 내에서
// cups 변수가 변경되는 것은 가능
const Components03 = () => {
  // []배열을 생성하고 cups 변수에 할당
  let cups: ReactElement[] = [];
  // cups 변수에 여러 개의 컵을 할당
  for (let i = 1; i <= 7; i++) {
    cups.push(<Cup key={i} guest={i}/>)
  }
  return (
    <>
    {cups}
    </>
  )
}


export default Components03