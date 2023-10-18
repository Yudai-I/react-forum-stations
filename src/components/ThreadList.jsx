import React from 'react';
import { useState, useEffect } from 'react';

export const ThreadList = () => {
    const [threads, setThread] = useState([]);
    const url = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads'

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setThread(data))
          .catch(error => {
            console.error('エラーが発生しました');
          });
      }, []);
    
    return(
      <>
      <h2 className="label">新着スレッド</h2>
      <div className="Threads">
        <ul>
          {threads.map(thread => (
            <li key={thread.id} className="ThreadTitle">{thread.title}</li>
          ))}
        </ul>
        </div>
      </>
    )
  }
  
  export default ThreadList