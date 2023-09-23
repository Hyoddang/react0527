import React, { useReducer } from 'react'
import { messengerReducer, initialState } from './MessengerReducer';
import ContactList from './ContactList';
import Chat from './Chat';
import { Contact } from './type'


// 연락처 데이터를 초기화
const contacts: Contact[] = [
  {id: 0, name: 'Lee', email: 'Lee@naver.com'},
  {id: 1, name: 'Yoon', email: 'Yoon@naver.com'},
  {id: 2, name: 'Hyo', email: 'Hyo@naver.com'},
]

export default function Index() { // 함수는 대문자로 작성
  // messengerReducer와 initialState를 사용하여 useReducer 훅을 초기화
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  // 현재 선택된 연락처의 메시지를 저장
  const message = state.messages[state.selectedId];

  // 현재 선택된 연락처를 찾기
  // undefined 태입을 배제하기 위해 일치하는 항목이 항상 있을 것이라는 확인을 주기 위해
  // : 타입단언을 사용
  const contact = contacts.find(c => c.id === state.selectedId) as Contact;


  return (
    <div>
      {/* 연락처 리스트 컴포넌트를 렌더링 */}
      <ContactList 
      contacts={contacts}
      selectedId={state.selectedId}
      dispatch={dispatch}
      />
      {/* 현재 선택된 연락처와 메시지로 채팅 컴포넌트를 렌더링 */}
      <Chat 
      key={contact.id}
      message={message}
      contact={contact}
      dispatch={dispatch}
      />
    </div>
  )
}
