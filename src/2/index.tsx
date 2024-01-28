import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  const [searchVal, setsearchVal] = useState("");
  const [finalSearchVal, setfinalSearchVal] = useState("");
  const debounceFn = useRef<NodeJS.Timeout>();
  const filterFn = useCallback(() => {
    const val = searchVal.toLowerCase();
    return tasks.filter((t) => t.value.toLowerCase().includes(val));
  }, [finalSearchVal]);

  useEffect(() => {
    setvisibleTasks(filterFn);
  }, [finalSearchVal]);

  const onSearch = (searchVal: string) => {
    setsearchVal(searchVal);
    if (debounceFn.current) clearTimeout(debounceFn.current);
    debounceFn.current = setTimeout(() => {
      setfinalSearchVal(searchVal);
    }, 500);
  };
  return (
    <div>
      <Input onChange={onSearch} value={searchVal} />
      <br />
      <List list={visibleTasks} />
    </div>
  );
};

export default Task2;
