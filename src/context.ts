import {createContext} from 'react';
import {UseTasksResponse} from './types';

export const TasksContext = createContext<UseTasksResponse>({
  tasks: [],
  addTask: () => null,
  editTask: () => null,
  deleteTask: () => null,
});
