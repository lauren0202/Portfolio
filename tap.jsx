import { useState } from 'react';

function Portfolio() {
  const [tab, setTab] = useState('about');

  return (
    <div>
      <button onClick={() => setTab('WORK')}>WORK</button>
      <button onClick={() => setTab('INFO')}>INFO</button>

      {tab === 'WORK' && <p>제가 수강한 과목들을 소개합니다.</p>}
      {tab === 'INFO' && <p>저에 대해 소개합니다.</p>}
    </div>
  );
}

export default Portfolio;
