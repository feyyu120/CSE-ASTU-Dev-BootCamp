import React, { useState } from "react";
import { useAtom } from "jotai";
import { taskAtom } from "./store";
import "./index.css";

export const InputTaker = ({ input, setInput, Add }) => {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Add();
          }
        }}
      />
      <button onClick={Add}>➕</button>
    </>
  );
};

export default function Home() {
  const [task, setTask] = useAtom(taskAtom);
  const [input, setInput] = useState("");

  const Add = () => {
    if (input.trim() === "") {
      alert("Please type task before add");
      return;
    }

    setTask([
      ...task,
      {
        id: Date.now(),
        text: input,
        isEditing: false,
        done: false,
      },
    ]);

    setInput("");
  };

  function Delete(id) {
    setTask((prev) => prev.filter((items) => items.id !== id));
  }

  function Edit(id) {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  }

  function UpdateText(id, newText) {
    setTask((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  }

  const Clear = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTask([]);
    }
  };

  return (
    <>
      <div className="home">
        <div className="inputTaker">
          <h1>Add Your Tasks</h1>
          <div className="input">
            <InputTaker input={input} setInput={setInput} Add={Add} />
          </div>
        </div>

        <div className="taskHolder">
          {task.length === 0 && <h2>No Task Yet 📝</h2>}

          <ul>
            {task.map((item) => (
              <li key={item.id} className={`list ${item.done ? "done" : ""}`}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() =>
                    setTask((prev) =>
                      prev.map((t) =>
                        t.id === item.id ? { ...t, done: !t.done } : t
                      )
                    )
                  }
                />

                {item.isEditing ? (
                  <input
                    className="editInput"
                    value={item.text}
                    onChange={(e) => UpdateText(item.id, e.target.value)}
                  />
                ) : (
                  <span>{item.text}</span>
                )}

                <button className="edit" onClick={() => Edit(item.id)}>
                  ✏️
                </button>

                <button className="delete" onClick={() => Delete(item.id)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        {task.length > 0 && (
          <button className="clear" onClick={Clear}>
            Clear All
          </button>
        )}
      </div>
    </>
  );
}
