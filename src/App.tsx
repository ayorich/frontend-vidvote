import React, { FC, ReactElement } from "react";
import "./App.css";

const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <h1>Hello, welcome to VidVote application</h1>
      <button>click me</button>
    </div>
  );
};

export default App;
