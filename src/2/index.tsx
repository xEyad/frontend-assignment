import { FunctionComponent, useRef, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { Task } from "./types";

const tasks: Task[] = [
  { id: "P", value: "Print bills" },
  { id: "C", value: "Call Rampbo" },
  { id: "r", value: "Print Statements all" },
  { id: "g", value: "pass uniwise test" },
  { id: "m", value: "make task 2 work" },
];

const Task2: FunctionComponent = () => {
  const [visibleTasks, setvisibleTasks] = useState(tasks);
  const debounceFn = useRef<NodeJS.Timeout>();

  const onSearch = (searchVal: string) => {
    if (debounceFn.current) clearTimeout(debounceFn.current);
    debounceFn.current = setTimeout(() => {
      const val = searchVal.toLowerCase();
      setvisibleTasks(tasks.filter((t) => t.value.toLowerCase().includes(val)));
    }, 500);
  };
  return (
    <div>
      <Input onChange={onSearch} />
      <br />
      <List list={visibleTasks} />
    </div>
  );
};

export default Task2;
