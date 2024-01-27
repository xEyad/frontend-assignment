import { create } from "zustand";
import { Task } from "../types";

type tasksStoreType = {
  tasks: Task[];
  delete: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newValue: boolean) => void;
};
export const useTasksStore = create<tasksStoreType>((set, get) => ({
  tasks: [
    { id: "P", value: "Print bills", isCompleted: false },
    { id: "C", value: "Call Rampbo", isCompleted: true },
    { id: "r", value: "Print Statements all", isCompleted: false },
    { id: "g", value: "pass uniwise test", isCompleted: true },
    { id: "m", value: "make task 2 work", isCompleted: false },
  ],
  delete: (taskId: string) => {
    set((state: tasksStoreType) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  changeTaskStatus: (taskId: string, newValue: boolean) => {
    set((state: tasksStoreType) => {
      const tasks = [...state.tasks];
      for (let idx = 0; idx < tasks.length; idx++) {
        const task = state.tasks[idx];
        if (task.id == taskId) {
          task.isCompleted = newValue;
          break;
        }
      }

      return {
        tasks: tasks,
      };
    });
  },
}));
