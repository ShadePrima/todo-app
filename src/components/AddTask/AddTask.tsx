import React from 'react';
import styles from './AddTask.module.scss';

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = React.useState('');

  return (
    <div className={styles.root}>
      <input
        placeholder='Add task'
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
