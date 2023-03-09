import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TaskList from './components/TaskList/TaskList';
import TaskItem from './components/TaskItem/TaskItem';
import { initialTask } from './utils/initialTask';

import './styles/App.css';

function App() {
  const [tasks, setTasks] = React.useState<
    {
      id: number;
      text: string;
      description: string;
      done: boolean;
    }[]
  >(initialTask);

  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        description: '',
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task: any) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleChangeDescription = (description: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: '',
        description: description,
        done: false,
      },
    ]);
  };

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <Routes>
        <Route
          path='/'
          element={
            <TaskList
              tasks={tasks}
              onAddTask={handleAddTask}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          }
        />
        <Route
          path='/:id'
          element={
            <TaskItem
              onChangeDescription={handleChangeDescription}
              tasks={tasks}
            />
          }
        />
      </Routes>
    </div>
  );
}

let nextId = 3;

export default App;
