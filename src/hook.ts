import {useState} from 'react';
import {Task, UseTasksResponse} from './types';

function useTasks(): UseTasksResponse {
  const [tasks, setTasks] = useState<Task[]>([]);

  return {
    tasks,
    addTask: (text: string) => {
      setTasks([{text, isCompleted: false, isDeleted: false}, ...tasks]);
      console.log('chamou add task');
    },
  };
}

export default useTasks;
