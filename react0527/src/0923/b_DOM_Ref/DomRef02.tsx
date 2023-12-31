import React, { useRef } from 'react'

//! ref 콜백을 사용하여 ref 목록을 관리
// 1. 부모 요소에 대한 단일 ref를 가져와서,
// DOM 조작 메서드(querySelectAll과 같은)를 사용하여 개별 자식 노드를 찾는 방법

// 2. ref 속성에 함수를 전달: ref 콜백

interface Image {
  id: number;
  imageUrl: string;
}

export default function DomRef02() {
  // 각 아이템의 DOM참조를 저장하기 위해 Map을 담는 ref를 선언
  const itemsRef = useRef<Map<number, HTMLElement> | null>(null);

  // 주어진 itemId를 가진 아이템으로 스크롤하는 함수
  function scrollToId(itemId: number) {
    const map = getMap();
    const node = map.get(itemId);
    if(node) {
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  // itemsRef에 저장된 Map을 반환하거나, 없으면 새로 생성해서 반화하는 함수
  function getMap() {
    if(!itemsRef.current) {
      itemsRef.current = new Map<number, HTMLElement>();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav style={{ textAlign: 'center' }}>
        {/* 각 버튼 클릭시 scrollToId 함수를 호출하여 해당 아이템으로 스크롤 */}
        <button onClick={() => scrollToId(0)}>First Image</button>
        <button onClick={() => scrollToId(5)}>Second Image</button>
        <button onClick={() => scrollToId(9)}>Third Image</button>
      </nav>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <ul style={{ listStyle: 'none', display: 'flex'}}>
          {/* imageList 배열을 순회하면서 각 Image 항목을 렌더링 */}
          {imageList.map(image => (
            <li
              key={image.id}
              ref={(node) => {
                const map = getMap();
                if(node) {
                  // DOM노드가 주어지면 Map에 추가
                  map.set(image.id, node);
                } else {
                  // DOM 노드가 제거되면 Map에서 해당 항목을 삭제
                  map.delete(image.id);
                }
              }}
              style={{ paddingRight: '10px' }}
            >
              <img src={image.imageUrl} alt={'Image #' + image.id} />
            </li>
          ))}
          
        </ul>
      </div>
    </>
  )
}

// 0부터 9까지의 id와 각각의 다른 이미지 URL을 가진 샘플 이미지 리스트를 생성
const imageList: Image[] = [];
for (let index = 0; index < 10; index++) {
  imageList.push({
    id: index,
    imageUrl: 'https://placekitten.com/250/200?image=' + index
  })
}
