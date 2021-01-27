import React, { useContext } from "react";
import TaskList from "../components/TaskList/TaskList";
import RootContext from "../context";
import { taskTypes } from "../data/taskTypes";

const TodoTasks = () => {
  const context = useContext(RootContext);

  return <TaskList taskList={context.todoTaskList} taskType={taskTypes.todo} />;
};

export default TodoTasks;
