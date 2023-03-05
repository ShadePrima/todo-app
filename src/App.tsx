import React from 'react';
import './styles/App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = React.useState<
    {
      id: number;
      text: string;
      done: boolean;
    }[]
  >(initialTask);

  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
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

  return (
    <div className='App'>
      <h1>To Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 1;

const initialTask = [
  { id: 0, text: 'Firs task', done: true },
  { id: 1, text: 'Second task', done: false },
  { id: 2, text: 'Third task', done: false },
];

export default App;
