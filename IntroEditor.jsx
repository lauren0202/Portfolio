import { useRef, useState } from 'react';

function IntroEditor() {
  const inputRef = useRef(null);
  const [intro, setIntro] = useState('');

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        placeholder="한 줄 소개를 입력하세요"
      />
      <button onClick={focusInput}>입력창으로 이동</button>
      <p>한 줄 소개: {intro}</p>
    </div>
  );
}

export default IntroEditor;