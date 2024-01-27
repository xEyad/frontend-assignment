import { FunctionComponent } from "react";
import { Task } from "../types";
import trash from "../../assets/trash.png";
import { useTasksStore } from "../model/useTasksStore";
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
    <li>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={task.isCompleted}
            onChange={(ev) => changeTaskStatus(task.id, ev.target.checked)}
          />
          {task.value}
          <i className="input-helper"></i>
        </label>
        <img
          src={trash}
          alt=""
          width={24}
          height={24}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </div>
    </li>
  );
};

export default Item;
