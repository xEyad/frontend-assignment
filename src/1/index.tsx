// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit}>
        <div className="title">
          <h1>Sign in</h1>
        </div>
        <div className="body">
          <div className="field">
            <label>Email</label>
            <input
              name="email"
              onChange={(event) => setEmail(event.currentTarget.value)}
              value={email}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
              value={password}
            />
          </div>
        </div>
        <div className="footer">
          <button>Login</button>
          <span className="copyright">&copy; Eyad 2024</span>
        </div>
      </form>
    </div>
  );
};

export default Task1;
