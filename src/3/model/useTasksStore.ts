import { create } from "zustand";
import { Task } from "../types";
import { Utils } from "./utils";

type tasksStoreType = {
  tasks: Task[];
  delete: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newValue: boolean) => void;
  addTask: (taskName: string) => void;
};
export const useTasksStore = create<tasksStoreType>((set, get) => ({
  tasks: [
    { id: Utils.generateString(4), value: "Print bills", isCompleted: false },
    { id: Utils.generateString(4), value: "Call Rampbo", isCompleted: true },
    {
      id: Utils.generateString(4),
      value: "Print Statements all",
      isCompleted: false,
    },
    {
      id: Utils.generateString(4),
      value: "pass uniwise test",
      isCompleted: true,
    },
    {
      id: Utils.generateString(4),
      value: "make task 2 work",
      isCompleted: false,
    },
  ],
  delete: (taskId: string) => {
    set((state: tasksStoreType) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  addTask: (taskName: string) => {
    set((state: tasksStoreType) => {
      const task: Task = {
        id: Utils.generateString(4),
        isCompleted: false,
        value: taskName,
      };

      return {
        tasks: [...state.tasks, task],
      };
    });
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
