import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.scss';

type TaskListProps = {
  tasks: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onChangeTask: (task: any) => void;
  onDeleteTask: (taskId: any) => void;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <div className={styles.root}>
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
