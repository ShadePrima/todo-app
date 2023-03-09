import React from 'react';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';
import styles from './TaskList.module.scss';

type TaskListProps = {
  tasks: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onAddTask: (text: any) => void;
  onChangeTask: (task: any) => void;
  onDeleteTask: (taskId: any) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onAddTask,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <div className={styles.root}>
      <AddTask onAddTask={onAddTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
