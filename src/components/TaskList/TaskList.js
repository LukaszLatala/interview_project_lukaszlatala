import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

const TaskList = ({ taskList, taskType }) => {
  return (
    <div className="taskList_container">
      {taskList.map((task) => {
        const { id, title, content } = task;
        return (
          <Task
            key={id}
            id={id}
            title={title}
            content={content}
            taskType={taskType}
          />
        );
      })}
    </div>
  );
};

export default TaskList;

// atom - jest kompnent reużywalny
