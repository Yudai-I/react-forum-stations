import React from 'react';
import { useState } from 'react';
import { Header } from '../components/Header';
export const NewThread = () => {
  const [title, setTitle] = useState('');
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const createThread = () => {
    const threadData = {title};

    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads', {
      method: 'POST',
      body: JSON.stringify(threadData),
    })
      .then((res) => {
        if (title == "") {
          alert('スレッド作成に失敗しました。スレッドタイトルを入力してください');
        } else {
          alert('スレッド作成に成功しました');
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
  };

  return (
    <>
      <h2>新しいスレッドを作成</h2>
      <input
        type="text"
        placeholder="スレッドタイトル"
        value={title}
        onChange={handleInput}
      />
      <button onClick={createThread}>作成</button>
    </>
  );
    }
    
    export default NewThread