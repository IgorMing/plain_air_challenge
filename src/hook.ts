import {useState} from 'react';
import {EditModeResponse, Task, UseTasksResponse} from './types';

export function useTasks(): UseTasksResponse {
  const [tasks, setTasks] = useState<Task[]>([]);

  return {
    tasks: tasks.filter(task => task.isDeleted !== true),
    addTask: text => {
      setTasks([{text, isCompleted: false, isDeleted: false}, ...tasks]);
    },
    editTask: (task, index) => {
      const instance = [...tasks];
      instance[index] = task;
      setTasks(instance);
    },
    deleteTask: index => {
      // the code below would be for hard deletion

      // const instance = [...tasks];
      // instance.splice(index, 1);
      // setTasks(instance);

      const instance = [...tasks];
      instance[index].isDeleted = true;
      setTasks(instance);
    },
  };
}

export function useEditingItem(): EditModeResponse {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return {
    mode: selectedIndex === null ? 'add' : 'edit',
    index: selectedIndex,
    setIndex: setSelectedIndex,
  };
}
