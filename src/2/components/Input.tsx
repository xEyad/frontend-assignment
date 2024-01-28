import { FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  onChange: (searchValue: string) => void;
  value: string;
}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div>
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="Search the list"
        value={props.value}
        onChange={(ev) => {
          props.onChange(ev.target.value);
        }}
      />
    </div>
  );
};

export default Input;
