/* eslint-disable no-lone-blocks */
import React from 'react'

//! 리스트 렌더링
// - JS의 배열 메서드를 사용하여 데이터 배열을 조작
// - filter(), map()을 사용하여 데이터 배열을 컴포넌트 배열로 필터링하고 변환하는 방법

//! 1. 배열로부터 데이터 렌더링

{/* 
<ul>
  <li>Person1 : mathematician</li>
  <li>person2 : chemist</li>
  <li>person3 : physicist</li>
  <li>person4 : chemist</li>
  <li>person5 : astrophysicist</li>
</ul>
*/}

type Person = {
  person: string;
}


const people: Person[] = [
  {person: 'Person1 : mathematician'},
  {person: 'person2 : chemist'},
  {person: 'person3 : physicist'},
  {person: 'person4 : chemist'},
  {person: 'person5 : astrophysicist'}
]

const animals = ['dog', 'cat', 'lion', 'tiger', 'hippo']

const RenderingList01 = () => {
  const listItems = people.map((people, index) => (
    <li key={index}>{people.person}</li>
  ));

  const animalItems = animals.map(animal =>
    // 목록의 각 자식요소에는 고유한 'key'prop'이 있어야 한다
    <li>{animal}</li>
  )
  return (
    <>
    <div>{listItems}</div>
    <div>{animalItems}</div>
    </>
  )
}

export default RenderingList01