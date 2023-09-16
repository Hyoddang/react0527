import React from 'react'

// 중괄호 사용 위치



const today: Date = new Date();

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(
        'en-US', { weekday: 'long'}
    ).format(date);
}

export default function Tsx03() {
    //! 1. JSX 태그 내부의 텍스트로 사용
    const name = 'lee';
    <div>{name}</div>
    //! 2. 기호(=) 바로 뒤에 오는 속성 값으로 사용
    const alter = '대체 문구'
    //! 3. JSX의 인라인 CSS 스타일 사용 시 중괄호 2개의 쌍으로 객체를 감싸서 전달
  return (
    <>
    <div>{name}</div>
    <h1>To Do List for {formatDate(today)}</h1>
    <img src="https://i.pinimg.com/564x/eb/4a/0c/eb4a0c5de1adfce5489c8dae100f7aca.jpg" alt={alter}
    style={{width: '300px', borderRadius: '50px'}}
    />
    </>
  );
}
