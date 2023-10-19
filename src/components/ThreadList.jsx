import React from 'react';
import { useState, useEffect } from 'react';

export const ThreadList = () => {
    const [threads, setThread] = useState([]);
    const url = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads'

    async function fetchFunc() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("fetchに失敗しました");
        }

        const data = await res.json();
        if (data.length > 0) {
          setThread(data);
        } else {
          throw new Error("json化に失敗しました");
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        fetchFunc();
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