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
      {todos.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>No Tasks Yet</h1>
        </div>
      )
      }
      {todos?.length > 0 && (
        <div style={{ width: "100%", padding: "0 200px" }}>
          <h1
            style={{
              color: "darkCyan",
              margin: "1rem",
              textShadow: "5px 5px 20px gray",
              width: "40rem",
            }}
            
          >
            Recent ToDos:
          </h1>

          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ display: "flex", gap: "10px", padding: "5px" }}
            >
              {editId === todo.id ? (
                <div
                  style={{
                    display: "flex",
                    padding: "1rem",
                    width: "90rem",
                    minHeight: "5rem",
                    justifyContent: "space-evenly",
                    borderRadius: "1rem",
                    alignItems: "center",
                    border: "3px solid darkCyan",
                    boxShadow: "5px 5px 15px gray",
                    overflow: "hidden",
                  }}
                >
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "black",
                      width: "90%",
                      minHeight: "4rem",
                      lineHeight: "1.5",
                      textAlign: "start",
                      borderRadius: "1rem",
                      padding: "0 1rem",
                      resize: "none",
                    }}
                  />
                  <button
                    onClick={() => {
                      dispatch(updateTodo({ id: todo.id, text: editText }));
                      setEditId(null);
                      setEditText("");
                    }}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      fontSize: "2rem",
                      borderRadius: "1rem",
                    }}
                  >
                    💾
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      fontSize: "1.8rem",
                      borderRadius: "1rem",
                    }}
                  >
                    🚫
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    padding: "1rem",
                    width: "90rem",
                    minHeight: "5rem",
                    justifyContent: "space-evenly",
                    borderRadius: "1rem",
                    alignItems: "center",
                    border: "3px solid darkCyan",
                    boxShadow: "5px 5px 15px gray",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "black",
                      width: "90%",
                      minHeight: "4rem",
                      lineHeight: "2",
                      textAlign: "start",
                    }}
                  >
                    {todo.text}
                  </p>

                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text);
                    }}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      fontSize: "2rem",
                      borderRadius: "1rem",
                    }}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      fontSize: "1.8rem",
                      borderRadius: "1rem",
                    }}
                  >
                    ❌
                  </button>
                </div>
              )}
            </li>
          ))}
        </div>
      )}
    </>
  );
};
