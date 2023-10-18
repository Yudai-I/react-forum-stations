import './App.css';
import * as React from 'react';
import { ThreadList } from './components/ThreadList';
import { Header } from './components/Header';
function App() {
  return (
    <>
    <Header />
    <ThreadList />
    </>
  );
}

export default App;
