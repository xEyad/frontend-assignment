import { FunctionComponent } from "react";
import { Task } from "../types";

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
  return (
    <li>
      <div className="form-check">
        <label className="form-check-label">
          {props.task.value}
          <i className="input-helper"></i>
        </label>
      </div>{" "}
      <i className="remove mdi mdi-close-circle-outline"></i>
    </li>
  );
};

export default Item;
