import {useState} from 'react';
import {Task, UseTasksResponse} from './types';

function useTasks(): UseTasksResponse {
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

export default useTasks;
