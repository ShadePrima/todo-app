import React from 'react';

import styles from './Task.module.scss';

type TaskProps = {
  task: {
    id: number;
    text: string;
    done: boolean;
  };
  onChange: (task: any) => void;
  onDelete: (taskId: any) => void;
};

const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className={styles.editInput}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className={styles.button} onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className={styles.button} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        <div className={styles.taskContent}>{taskContent}</div>
        <div className={styles.btnDelete}>
          <button className={styles.button} onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </label>
    </div>
  );
};

export default Task;
