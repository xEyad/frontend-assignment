import { FunctionComponent } from "react";
import { Task } from "../types";
import trash from "../../assets/trash.png";
import { useTasksStore } from "../model/useTasksStore";
import { Checkbox, IconButton } from "@mui/material";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  task: Task;
}

const Item: FunctionComponent<ItemProps> = (props) => {
  const deleteTask = useTasksStore((state) => state.delete);
  const changeTaskStatus = useTasksStore((state) => state.changeTaskStatus);
  const { task } = props;
  return (
    <li className="item">
      <Checkbox
        className="checkbox"
        checked={task.isCompleted}
        onChange={(ev) => changeTaskStatus(task.id, ev.target.checked)}
      />
      <span
        className="task-name"
        style={{
          textDecoration: task.isCompleted ? "line-through" : "",
        }}
      >
        {task.value}
      </span>
      <IconButton className="icon" aria-label="delete">
        <DeleteOutlineSharpIcon
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </IconButton>
    </li>
  );
};

export default Item;
