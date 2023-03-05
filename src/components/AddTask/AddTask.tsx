import React from 'react';
import styles from './AddTask.module.scss';

const AddTask: React.FC = () => {
  const [text, setText] = React.useState('');
  console.log(text);

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
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
