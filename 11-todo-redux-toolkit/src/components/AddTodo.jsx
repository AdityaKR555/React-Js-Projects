import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

export const AddTodo = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input.trim() === "") return;
        dispatch(addTodo({text : input}));
        setInput(""); 
    }

  return (
    <div style={{width:"100%", padding:"80px 200px 50px",}}>
      <h1 style={{color:"darkCyan", margin:"1rem", textShadow:"5px 5px 20px gray", width:"40rem"}}>Enter New ToDo:</h1>
    <form onSubmit={addTodoHandler} style={{display:"flex"}}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{width:"80rem", height:"4rem", borderRadius:"5rem 0 0 5rem", padding:"1rem 2rem", fontSize:"1.8rem",}}
      />
      <button
        type="submit"
        style={{width:"10rem", height:"4rem", borderRadius:"0 5rem 5rem 0", backgroundColor:"darkCyan",color:"white", padding:"0 .7rem" ,fontSize:"1.5rem", fontWeight:"bold", cursor:"pointer",}}
      >
        Add Todo
      </button>
    </form>
    </div>
  );
};
