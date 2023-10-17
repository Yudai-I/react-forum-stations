import './App.css';
import * as React from 'react';
import { ThreadList } from './routes/ThreadList';
import { Header } from './Header';
function App() {
  return (
    <>
    <Header />
    <ThreadList />
    </>
  );
}

export default App;
