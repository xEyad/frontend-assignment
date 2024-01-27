import { FunctionComponent, useEffect, useRef, useState } from "react";
// Components
import List from "./components/List";
// Style
import "./index.scss";
import { useTasksStore } from "./model/useTasksStore";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const addTask = useTasksStore((state) => state.addTask);
  const [visibleTasks, setvisibleTasks] = useState(tasks);
  const [curSearchValue, setcurSearchValue] = useState("");
  const debounceFn = useRef<NodeJS.Timeout>();
  const [addText, setaddText] = useState("");

  const onSearch = (searchVal: string) => {
    if (debounceFn.current) clearTimeout(debounceFn.current);
    debounceFn.current = setTimeout(() => {
      const val = searchVal.toLowerCase();
      setcurSearchValue(val);
      setvisibleTasks(tasks.filter((t) => t.value.toLowerCase().includes(val)));
    }, 500);
  };

  useEffect(() => {
    if (curSearchValue) onSearch(curSearchValue);
    else setvisibleTasks(tasks);
  }, [tasks]);

  return (
    <div id="task-3">
      <div className="inputs">
        <TextField
          type="text"
          className="searchField"
          label="Search "
          variant="outlined"
          placeholder="Search the list"
          value={curSearchValue}
          onChange={(ev) => {
            setcurSearchValue(ev.target.value);
            onSearch(ev.target.value);
          }}
        />
        <TextField
          type="text"
          className="searchField"
          label="Add "
          variant="outlined"
          placeholder="What to do today?"
          value={addText}
          onChange={(ev) => {
            setaddText(ev.target.value);
          }}
        />
        <Button
          variant="contained"
          disabled={addText ? false : true}
          onClick={() => {
            addTask(addText);
            setaddText("");
            setcurSearchValue("");
          }}
        >
          Add
        </Button>
      </div>
      <List list={visibleTasks} />
    </div>
  );
};

export default Task3;
