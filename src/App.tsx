import React from 'react';
import './styles/App.css';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <div className='App'>
      <h1>To Do List</h1>
      <AddTask />
    </div>
  );
}

export default App;
