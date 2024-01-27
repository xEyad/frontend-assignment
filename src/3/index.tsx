import { FunctionComponent, useEffect, useRef, useState } from "react";
// Components
import Input from "./components/Input";
import List from "./components/List";
import { Task } from "./types";
// Style
import "./index.scss";
import { useTasksStore } from "./model/useTasksStore";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const [visibleTasks, setvisibleTasks] = useState(tasks);
  const [curSearchValue, setcurSearchValue] = useState("");
  const debounceFn = useRef<NodeJS.Timeout>();

  const onSearch = (searchVal: string) => {
    if (debounceFn.current) clearTimeout(debounceFn.current);
    debounceFn.current = setTimeout(() => {
      const val = searchVal.toLowerCase();
      setcurSearchValue(curSearchValue);
      setvisibleTasks(tasks.filter((t) => t.value.toLowerCase().includes(val)));
    }, 500);
  };

  useEffect(() => {
    if (curSearchValue) onSearch(curSearchValue);
    else setvisibleTasks(tasks);
    console.log("zustand tasks changed");
  }, [tasks]);

  return (
    <div id="task-3">
      <Input onChange={onSearch} />
      <br />
      <List list={visibleTasks} />
    </div>
  );
};

export default Task3;
