import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./AddTaskForm.css";
import RootContext from "../../context";
import { taskTypes } from "../../data/taskTypes";

const DisplayAddTaskOptions = () => {
  const context = useContext(RootContext);

  const { addTask, todoTaskList, inProgressTaskList, doneTaskList } = context;

  return (
    <>
      <main>
        <article className="article_container">
          <div className="div-header">
            <div className="header__title">
              <h2> Do zrobienia</h2>
              <span>({todoTaskList.length})</span>
            </div>
            <button type="button" class="btn-add" onClick={addTask}>
              Dodaj <i class="fas fa-plus"></i>
            </button>
          </div>
        </article>

        <article className="article_container">
          <div className="div-header">
            <div className="header__title">
              <h2> W trakcie</h2>
              <span>({inProgressTaskList.length})</span>
            </div>
            <button
              type="button"
              class="btn-add"
              onClick={() => addTask(taskTypes.inProgress)}
            >
              Dodaj <i class="fas fa-plus"></i>
            </button>
          </div>
        </article>

        <article className="article_container">
          <div className="div-header">
            <div className="header__title">
              <h2> Zrobione</h2>
              <span>({doneTaskList.length})</span>
            </div>
            <button
              type="button"
              class="btn-add"
              onClick={() => addTask(taskTypes.done)}
            >
              Dodaj <i class="fas fa-plus"></i>
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default DisplayAddTaskOptions;
