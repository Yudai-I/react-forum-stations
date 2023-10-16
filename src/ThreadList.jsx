import React from 'react';
import { useState, useEffect } from 'react'

export const ThreadList = () => {
    const [threads, setThread] = useState([]);
    const url = 'https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads'

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setThread(data))
      }, []);
    
    return(
      <>
      <h1>新着スレッド</h1>
      
        <ul class="threads">
          {threads.map(thread => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      
      </>
    )
  }
  
  export default ThreadList