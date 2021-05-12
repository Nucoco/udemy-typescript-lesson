import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text='Hello' />
      </header>
    </div>
  );
}

export default App;
