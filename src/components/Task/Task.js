import React, { useContext } from "react";

import RootContext from "../../context";
import { taskTypes } from "../../data/taskTypes";

import "./Task.css";

const Task = ({ id, title, content, taskType }) => {
  const context = useContext(RootContext);
  const {
    updateTaskTitle,
    updateTaskContent,
    selectTaskIdAndType,
    deleteTask,
  } = context;

  return (
    <>
      {title.length === 0 ? (
        <p style={{ color: "crimson", padding: "10px 0", textAlign: "center" }}>
          Pole "tytuł" musi być uzupełnione
        </p>
      ) : null}
      <div className="task">
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={updateTaskTitle}
          onFocus={() => selectTaskIdAndType(id, taskType)}
          placeholder="Wpisz tytuł"
          required
        />

        <div className="task-icon-status">
          {taskType === taskTypes.inProgress ? (
            <i class="far fa-edit text-yellow" aria-hidden="true" />
          ) : taskType === taskTypes.done ? (
            <i class="far fa-check-square text-green" aria-hidden="true" />
          ) : (
            <i class="far fa-square text-light" aria-hidden="true" />
          )}
        </div>

        <textarea
          className="content"
          name="content"
          value={content}
          onChange={updateTaskContent}
          taskContent
          onFocus={() => selectTaskIdAndType(id, taskType)}
          placeholder="Wpisz opis"
        />
        <div className="task-icon">
          <i
            class="fas fa-trash-alt trash-blue"
            onClick={() => deleteTask(id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Task;
