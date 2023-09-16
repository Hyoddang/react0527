import React, { ReactNode, useState } from 'react'

//! 컴포넌트 간의 상태 공유
// 두 컴포넌트를 묶어서 항상 함께 변경하는 방법
// : 상태 올리기
// : 두 컴포넌트에서 상태를 제거하고 그들의 가장 가까운 공통부모에 상태를 옮겨
// : props를 통해 전달

// 부모: Accordion
// 자식: Panel
// 부모 컴포넌트가 두 개의 독립적인 자식 컴포넌트를 렌더링

//? 한 번에 하나의 패널만 확정되도록 변경
// >> 두 번쨰 패널을 확장하면 첫 번째 패널이 축소되어야 함.
// 1. 자식 컴포넌트에서 상태를 제거
// 2. 공통 부모로부터 하드코딩된 데이터를 전달
// 3. 공통 부모에 상태를 추가하고 이벤트 핸들러와 함께 아래로 전달

interface PanelProps {
  title: string;
  children: ReactNode;
}

function Panel({ title, children}: PanelProps) {
  // 내용이 보이는지 여부를 결정하는 boolean타입의 isActive 상태
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  )
}

export default function SharingState01() { // Accordion 부모 컴포넌트
  return (
    <>
      <h2>0910 Frontend Class 01</h2>
      <Panel title='About'>
        Sharing State Between Components
      </Panel>
      <Panel title='Transfer'>
        컴포넌트 간의 상태 공유하기
      </Panel>
    </>
  )
}
