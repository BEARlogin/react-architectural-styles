import type { Task } from "@entities/task";
import { useEffect, useState } from "react";

// store tasks in localstorage
const tasksFromLocalStorage = localStorage.getItem("tasks");
const tasksList = tasksFromLocalStorage
  ? JSON.parse(tasksFromLocalStorage)
  : [];

//save tasks in localstorage
const saveTasks = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksList);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
};
