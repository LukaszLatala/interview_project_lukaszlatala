import React, { useContext } from "react";
import TaskList from "../components/TaskList/TaskList";
import RootContext from "../context";
import { taskTypes } from "../data/taskTypes";

const DoneTasks = () => {
  const context = useContext(RootContext);

  return <TaskList taskList={context.doneTaskList} taskType={taskTypes.done} />;
};

export default DoneTasks;
