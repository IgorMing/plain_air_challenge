export type Task = {
  text: string;
  isCompleted: boolean;
  isDeleted: boolean; // just an option for soft deletion
};

export type UseTasksResponse = {
  tasks: Task[];
  addTask(text: string): void;
};
