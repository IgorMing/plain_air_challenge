export type Task = {
  text: string;
  isCompleted: boolean;
  // isDeleted: boolean; // necessary attribute for soft deletion
};

export type UseTasksResponse = {
  tasks: Task[];
  addTask(text: string): void;
  editTask(task: Task, index: number): void;
  completeTask(isCompleted: boolean, index: number): void;
  deleteTask(index: number): void;
};

type IndexType = number | null;

export type EditModeResponse = {
  index: IndexType;
  setIndex(value: IndexType): void;
  mode: "add" | "edit";
};
