import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import { EditModeResponse, Task, UseTasksResponse } from "./types";

export function useTasks(): UseTasksResponse {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function getData() {
      const tasks = await AsyncStorage.getItem("tasks");

      if (tasks !== null) {
        setTasks(JSON.parse(tasks));
      }
    }

    getData();
  }, []);

  useEffect(() => {
    async function save() {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    }

    save();
  }, [tasks]);

  return {
    tasks,
    // tasks: tasks.filter(task => task.isDeleted !== true), in case of soft delete
    addTask: (text) => {
      setTasks([{ text, isCompleted: false }, ...tasks]);
    },
    editTask: (task, index) => {
      const instance = [...tasks];
      instance[index] = task;
      setTasks(instance);
    },
    completeTask: (isCompleted = true, index) => {
      const instance = [...tasks];
      instance[index].isCompleted = isCompleted;
      setTasks(instance);
    },
    deleteTask: (index) => {
      const instance = [...tasks];
      instance.splice(index, 1);
      setTasks(instance);

      // the code below would be for soft deletion
      // const instance = [...tasks];
      // instance[index].isDeleted = true;
      // setTasks(instance);
    },
  };
}

export function useEditingItem(): EditModeResponse {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return {
    mode: selectedIndex === null ? "add" : "edit",
    index: selectedIndex,
    setIndex: setSelectedIndex,
  };
}
