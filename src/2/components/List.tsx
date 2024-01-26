import { FunctionComponent } from "react";

// Components
import Item from "./Item";
import { Task } from "../types";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  list: Task[];
}

const List: FunctionComponent<ListProps> = (props) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {props.list.map((task, idx) => (
          <div key={task.id}>
            <Item task={task}></Item>
          </div>
        ))}
        {props.list.length == 0 ? <p>Nothing found :(</p> : null}
      </ul>
    </div>
  );
};

export default List;
