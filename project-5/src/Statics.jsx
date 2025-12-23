import React from "react";
import { useAtom } from "jotai";
import { taskAtom } from "./store";

function Statics() {
  const [tasks] = useAtom(taskAtom);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.done).length;

  return (
    <div className="statics">
      <h1>Statistics</h1>
      <p>Total tasks: {total}</p>
      <p>Completed tasks: {completed}</p>
    </div>
  );
}

export default Statics;
