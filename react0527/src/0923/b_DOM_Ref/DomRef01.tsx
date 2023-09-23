import React, { useRef } from 'react'

//! Dom을 Refs로 조작

//? 1. 노드에 대한 ref를 가져오기
// 컴포넌트 내부에서 ref를 선언
// DOM노드를 얻고자 하는 JSX태그에 ref 속성으로 ref를 전달

// Ex 1. 텍스트 입력에 포커스

// Ex 2. 요소를 스크롤

export default function DomRef01() {
  // Ex 1. 텍스트 입력에 포커스
  const inputRef = useRef<HTMLInputElement>(null);

  // Ex 2. 요소를 스크롤
  // 세 개의 이미지에 대한 참조를 각각 생성
  const firstimageRef = useRef<HTMLImageElement>(null);
  const secondimageRef = useRef<HTMLImageElement>(null);
  const thirdimageRef = useRef<HTMLImageElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  // 요소 스크롤 이벤트 핸들러 정의
  // 첫 번째 고양이 이미지로 스크롤 되는 
  function handleScrollToFirstImage() {
    firstimageRef.current?.scrollIntoView({
      behavior: 'smooth', // 스크롤의 동작을 부드럽게 넘어가도록 지정
      block: 'nearest', // 수직 위치를 어떻게 처리할지 결정
      inline: 'center' // 수평 위치를 어떻게 처리할지 결정
    })
  }
  function handleScrollToSecondImage() {
    secondimageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest', 
      inline: 'center' 
    })
  }
  function handleScrollToThirdImage() {
    thirdimageRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest', 
      inline: 'center' 
    })
  }

  return (
    <>
    {/* input 요소에 inputRef를 연결 */}
    <h2>1. 텍스트 입력에 포커스</h2>
    <input ref={inputRef} />
    <button onClick={handleClick}>
      Focus the input
    </button>
    <hr />
    <h2>2. 요소 스크롤(Carousel 캐러셀 만들기)</h2>
    {/* 각 버튼은 각 이미지로 스크롤하는 함수를 호출 */}
    <nav style={{ textAlign: 'center' }}>
      <button onClick={handleScrollToFirstImage}>
        First Image
      </button>
      <button onClick={handleScrollToSecondImage}>
        Second Image
      </button>
      <button onClick={handleScrollToThirdImage}>
        Third Image
      </button>
    </nav>
    <div style={{ width: '100%', overflow: 'hidden'}}>
      {/* 각 이미지에 해당하는 참조(ref)를 연결 */}
      <ul style={{ listStyle: 'none', scrollPaddingInlineStart: '20px', display: 'flex'}}>
        <li style={{ display: 'inline'}}>
          <img src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg" 
          alt="First" 
          ref={firstimageRef} 
          width='300px' 
          height='200px'/>
        </li>
        <li>
          <img src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg" 
          alt="Second" 
          ref={secondimageRef} 
          width='300px' 
          height='200px'/>
        </li>
        <li>
          <img src="https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_1280.jpg" 
          alt="Third" 
          ref={thirdimageRef} 
          width='300px' 
          height='200px'/>
        </li>
      </ul>
    </div>
    </>
  )
}
