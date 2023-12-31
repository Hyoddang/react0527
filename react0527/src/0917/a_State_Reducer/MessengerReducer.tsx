import { Action } from './type'

// useState 상태관리 >> useReducer 상태관리로 변환
// 탭(버튼) 간 전환 시 입력 값을 복원(유지)

// 메시지 상태에 대한 타입 정의
type MessagesState = {
  [key: number]: string;
}

// 앱의 전체 상태에 대한 타입을 정의
type AppState = {
  selectedId: number;
  messages: MessagesState;
}

  // 초기 상태 정의
export const initialState: AppState = {
  selectedId: 0,
  messages: {
    0: 'Hello Lee',
    1: 'Hello Yoon',
    2: 'Hello Hyo',
  },
};

export function messengerReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'changed_selection': {
      // 연락처 선택을 변경
      return {
        ...state,
        selectedId: action.contactId
      }
    }
    case 'edited_message': {
      // 현재 선택된 연락처의 메시지를 수정
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      }
    }
    case 'sent_message': {
      // 메시지 전송 후 해당 연락처의 메시지를 비움('')
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        }
      }
    }

    default: {
      // 알 수 없는 액션 타입에 대해 오류를 발생
      throw new Error('Unknow Action: ' + action);
    }
  }
}