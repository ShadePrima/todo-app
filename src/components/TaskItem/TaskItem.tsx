import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './TaskItem.module.scss';

type TaskItemProps = {
  tasks: {
    id: number;
    text: string;
    description: string;
    done: boolean;
  }[];
  onChangeDescription: (description: any) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ tasks, onChangeDescription }) => {
  const [description, setDescription] = React.useState('');

  const { id } = useParams();

  const currentTask = tasks.filter((task) => task.id === Number(id));
  console.log(currentTask, 'taskItem');

  return (
    <div className={styles.root}>
      <Link className={styles.linkBack} to='/'>
        <Button>Back</Button>
      </Link>
      <br />

      {currentTask.map((task) => (
        <div key={task.id} className={styles.text}>
          {task.text}
        </div>
      ))}
      <button onClick={() => onChangeDescription(description)}>
        Add Details
      </button>
      {currentTask.map((task) => (
        <div key={task.id} className={styles.text}>
          {task.description}
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
