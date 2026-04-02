import { useEffect, useState } from "react";
import useQuote from "./hooks/useQuote"
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const quote = useQuote(trigger);

  const addNotes = (e) => {
    e.preventDefault();
    if(title.trim() === '' && detail.trim() === '') alert('Both fields cannot be empty');
    else{
      let newNotes = [...note];
      newNotes.push({title, detail});
      setNote(newNotes);
      setTitle("");
      setDetail("");
      setTrigger(prev => prev+1);
    }
  }

  const deleteNotes = (index) => {
    let newNotes = [...note];
    newNotes.splice(index, 1);
    setNote(newNotes);
  }
  

  return (
    <>
      <div className="main">
        <h2>Notes And Quotes</h2>
        <form className="input" onSubmit={(e) => addNotes(e)}>
          <input type="text" placeholder="Enter Title" value={title} onChange={(e) => (setTitle(e.target.value))} />
          <input type="text" placeholder="Enter Details" value={detail} onChange={(e) => setDetail(e.target.value)} />
          <button type="submit">Add Note</button>
        </form>
        <div className="output">
          {
            note.length > 0 ? (
              note.map((n, i) => (
                <div key={i}>
                  <p>{n.title}</p>
                  <p>{n.detail}</p>
                  <button onClick={() => deleteNotes(i)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No Notes added Yet</p>
            )
          }
        </div>
        <div className="quotes">
          <p>{quote}</p>
        </div>
      </div>
    </>
  );
}

export default App;
