import React, { useContext } from "react";
import TaskList from "../components/TaskList/TaskList";
import RootContext from "../context";
import { taskTypes } from "../data/taskTypes";

const InProgressTasks = () => {
  const context = useContext(RootContext);

  return (
    <TaskList
      taskList={context.inProgressTaskList}
      taskType={taskTypes.inProgress}
    />
  );
};

export default InProgressTasks;
