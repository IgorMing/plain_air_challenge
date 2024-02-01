import {useState} from 'react';
import {EditModeResponse, Task, UseTasksResponse} from './types';

export function useTasks(): UseTasksResponse {
  const [tasks, setTasks] = useState<Task[]>([]);

  return {
    tasks,
    addTask: text => {
      setTasks([{text, isCompleted: false, isDeleted: false}, ...tasks]);
    },
    editTask: (task, index) => {
      const instance = [...tasks];
      instance[index] = task;
      setTasks(instance);
    },
    deleteTask: index => {
      const instance = [...tasks];
      instance.splice(index, 1);
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
