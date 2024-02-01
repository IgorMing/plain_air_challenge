import {createContext} from 'react';
import {EditModeResponse, UseTasksResponse} from './types';

export const TasksContext = createContext<UseTasksResponse>({
  tasks: [],
  addTask: () => null,
  editTask: () => null,
  deleteTask: () => null,
});

export const EditModeContext = createContext<EditModeResponse>({
  index: null,
  setIndex: () => null,
  mode: 'add',
});
