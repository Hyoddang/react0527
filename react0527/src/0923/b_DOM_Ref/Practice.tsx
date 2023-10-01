import React, { useRef, useState } from 'react'

// 비디오 재생 및 일시정지

export default function Practice() {

  // 영상 재생 여부를 상태로 관리
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // video 요소에 대한 참조를 저장하기 위해서 useRef 생성
  const ref = useRef<HTMLVideoElement | null>(null);

  // 버튼 클릭 시 영상의 재생 및 일시정지를 처리하는 함수 정의
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if(ref.current) {
      if (nextIsPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }

  return (
    <>
      <hr />
      {/* 
        버튼 클릭 시 handleClick 함수가 실행
        영상의 재생 및 일시 정지를 제어
      */}
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {/* 
        video 요소에 ref를 전달하여 참조를 얻는다. 
        재생 되거나 일시정지 될 때 상태를 업데이트
      */}
      <video width='400px' height='300px' ref={ref} 
      onPlay={() => setIsPlaying(true) } 
      onPause={() => setIsPlaying(false)}>
        {/* 영상 소스를 설정 */}
        <source src='https://cdn.pixabay.com/vimeo/629483574/90877.mp4?width=960&hash=7c0bccbf0026a85823562a9a5b2a05f87be70f6f' type='video/mp4'/>
      </video>
    </>
  )
}
