import React from "react";
import DoneTasks from "./DoneTasks";
import InProgressTasks from "./InProgressTasks";
import TodoTasks from "./TodoTasks";

import "./DisplayAllTaskList.css";

const DisplayAllTaskLists = () => {
  return (
    <div className="DisplayAllTaskLists_container">
      <TodoTasks />
      <InProgressTasks />
      <DoneTasks />
    </div>
  );
};

export default DisplayAllTaskLists;
