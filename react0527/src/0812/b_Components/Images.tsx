import React from 'react'

// AImage 컴포넌트 생성
// 컴포넌트(구성 요소) 빌드하는 방법
// 1. 구성 요소 내보내기
// - 다른 파일 또는 다른 함수 사용할 수 있도록 파일의 기본 기능 표시
// 2. 함수정의
// - function AImage와 같이 React의 구성요소는 일반 JS함수
// - 함수명을 항상! 대문자로 시작
function Puppy() {
  return (
    <>
      <img 
    src='https://cdn.pixabay.com/photo/2018/05/01/07/47/animal-3364909_1280.png' alt='BBI YAK' 
    style={{ width: '300px' }}
    />
      <img 
    src='https://cdn.pixabay.com/photo/2018/05/01/07/47/animal-3364909_1280.png' alt='BBI YAK' 
    style={{ width: '300px' }}
    />
  </>

    // 마크업 추가(HTML 요소)
    // HTML과 유사하지만 실제로는 JS로 작동 - 해당 구문을 JSX/TSX라고 불림.
    // JSX: JS 내부에서 마크업을 삽입할 수 있는 문법

    // 구성 요소의 마크업은 모두 한 줄에 작성 가능
    // 마크업이 모두 하나 줄에 작성이 불가하다면 return문 안에서 ()소괄호로 묶어야만 한다.
    // 여러 줄을 표혀할 때, 소괄호를 생략할 경우 return문 자체가 무시
    
  );
}

export default function Images() {

  return (
    //section태그 - 소문자
    // : React가 HTML태그를 참조하는 것으로 인식
    <section>
    <h1>Cute Puppies</h1>
    { /* Puppy태그 - 대문자 */ }
    { /*  */ }
    <Puppy />
    <Puppy />
    <Puppy />
    </section>
  )
}


// 컴포넌트: 구성 요소
// - UI(HTML) 블록

<article>
    <h1>My Frist Component</h1>
    <ol>
        <li>Components: Ui Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
    </ol>
</article>

//! 컴포넌트 정의