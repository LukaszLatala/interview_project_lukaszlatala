import React, { useState } from "react";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import DisplayAddTaskOptions from "../components/AddTaskForm/DisplayAddTaskOptions";
import { v4 as uuidv4 } from "uuid";

import RootContext from "../context";
import { taskTypes } from "../data/taskTypes";
import DisplayAllTaskLists from "../views/DisplayAllTaskLists";

import useLocalStorage from "../hooks/useLocalStorage";

const Root = () => {
  const [todoTaskList, setTodoTaskList] = useLocalStorage("todoTaskList", []);
  const [inProgressTaskList, setInProgressTaskList] = useLocalStorage(
    "inProgressTaskList",
    []
  );
  const [doneTaskList, setDoneTaskList] = useLocalStorage("doneTaskList", []);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTaskType, setSelectedTaskType] = useState("");

  const addTask = (taskType) => {
    const newTask = {
      id: uuidv4(),
      title: "",
      content: "",
    };

    switch (taskType) {
      case taskTypes.inProgress:
        setInProgressTaskList([...inProgressTaskList, newTask]);
        break;
      case taskTypes.done:
        setDoneTaskList([...doneTaskList, newTask]);
        break;
      default:
        setTodoTaskList([...todoTaskList, newTask]);
    }
  };

  const selectTaskIdAndType = (taskId, taskType) => {
    setSelectedTaskId(taskId);
    setSelectedTaskType(taskType);
  };

  const updateTaskTitle = (e) => {
    switch (selectedTaskType) {
      case taskTypes.todo:
        const mapedTodoTasks = todoTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.title = e.target.value;
          }
          return task;
        });
        setTodoTaskList([...mapedTodoTasks]);
        break;

      case taskTypes.inProgress:
        const mapedinProgressTasks = inProgressTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.title = e.target.value;
          }
          return task;
        });
        setInProgressTaskList([...mapedinProgressTasks]);
        break;

      case taskTypes.done:
        const mapedinDoneTasks = doneTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.title = e.target.value;
          }
          return task;
        });
        setDoneTaskList([...mapedinDoneTasks]);
        break;

      default:
        break;
    }
  };

  const updateTaskContent = (e) => {
    switch (selectedTaskType) {
      case taskTypes.todo:
        const mapedTodoTasks = todoTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.content = e.target.value;
          }
          return task;
        });
        setTodoTaskList([...mapedTodoTasks]);
        break;

      case taskTypes.inProgress:
        const mapedinProgressTasks = inProgressTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.content = e.target.value;
          }
          return task;
        });
        setInProgressTaskList([...mapedinProgressTasks]);
        break;

      case taskTypes.done:
        const mapedinDoneTasks = doneTaskList.map((task) => {
          if (task.id === selectedTaskId) {
            task.content = e.target.value;
          }
          return task;
        });
        setDoneTaskList([...mapedinDoneTasks]);
        break;

      default:
        break;
    }
  };

  const deleteTask = (id) => {
    const fiteredtodoTaskList = todoTaskList.filter((el) => id !== el.id);
    const fiteredinProgressTaskList = inProgressTaskList.filter(
      (el) => id !== el.id
    );
    const fitereddoneTaskList = doneTaskList.filter((el) => id !== el.id);
    setTodoTaskList([...fiteredtodoTaskList]);
    setInProgressTaskList([...fiteredinProgressTaskList]);
    setDoneTaskList([...fitereddoneTaskList]);
  };
  return (
    <RootContext.Provider
      value={{
        addTask,
        todoTaskList,
        inProgressTaskList,
        doneTaskList,
        updateTaskTitle,
        updateTaskContent,
        selectTaskIdAndType,
        deleteTask,
      }}
    >
      <Aside />
      <Header />
      <DisplayAddTaskOptions />
      <DisplayAllTaskLists />
    </RootContext.Provider>
  );
};
export default Root;
