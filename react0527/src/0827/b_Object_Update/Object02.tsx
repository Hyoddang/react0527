import React, { ChangeEvent, useState } from 'react'

//! spread 구문을 사용하여 객체 복사

// 입력 필드들 중에서
// 한 필드만 업데이트 하고, 다른 모듈 필드에 대해 이전 값을 유지

export default function Object02() {
  // 각 입력 필드에 대해 별도의 상태 변수를 선언 X
  // 여러 양식을 한 번에 관리가 필요한 경우,
  // 모든 데이터를 객체에 그룹화 하여 유지하는 것이 편리
  const [person, setPerson] = useState({
    firstName: '도영',
    lastName: '김',
    email: 'daum269@naver.com'
  })

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: e.target.value,
      // lastName: person.lastName,
      // email: person.email
      ...person, // 이전 필드를 복사
      firstName: e.target.value
    })
  }
  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: e.target.value,
      // lastName: person.lastName,
      // email: person.email
      ...person,
      lastName: e.target.value
    })
  }
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      // firstName: e.target.value,
      // lastName: person.lastName,
      // email: person.email
      ...person,
      email: e.target.value
    })
}

  return (
    <>
      <label>
        First Name:
        <input 
        name='firstName'
        type="text" 
        value={person.firstName} 
        onChange={handleFirstNameChange} />
        <br />

        Last Name:
        <input 
        name='lastName'
        type="text" 
        value={person.lastName} 
        onChange={handleLastNameChange} />
        <br />

        Email:
        <input 
        name='email'
        type="text" 
        value={person.email} 
        onChange={handleEmailChange} />
      </label>
      <br />
      <p>
        {person.firstName}
        <br />
        {person.lastName}
        <br />
        {person.email}
      </p>
    </>
  )
}
