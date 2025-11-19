import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/TodoSlice";
import { useState } from "react";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <>
      {/* <h1>Todos</h1>
            {todos.map(todo => (
                <li key={todo.id} style={{display: "flex", justifyContent: "space-around", padding:"5px"}}>
                    <p style={{fontSize:"20px", fontWeight:"bold", color:"red"}}>{todo.text}</p>
                    <button onClick={() => dispatch(updateTodo(todo.id, todo.text))}>Edit</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </li>
            ))} */}
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ display: "flex", gap: "10px", padding: "5px" }}
        >
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => {
                  dispatch(updateTodo({ id: todo.id, text: editText }));
                  setEditId(null);
                  setEditText("");
                }}
              >
                Save
              </button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>
                {todo.text}
              </p>

              <button
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>

              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </>
          )}
        </li>
      ))}
    </>
  );
};
