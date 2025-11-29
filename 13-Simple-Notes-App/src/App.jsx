import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const makeNotes = (e) => {
    e.preventDefault();
    if (title.trim() === "" && details.trim() === "")
      alert("Both fields cannot be empty");
    else {
      let newNotes = [...notes];
      newNotes.push({ title, details });
      setNotes(newNotes);
      setTitle("");
      setDetails("");
    }
  };


useEffect(() => {
  const savedNotes = localStorage.getItem("notesData");

  if (savedNotes) {
    try {
      setNotes(JSON.parse(savedNotes));
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
    }
  }
}, []);


useEffect(() => {
  if (notes.length > 0) {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }
}, [notes]);



  const deleteNote = (idx) => {
    let newNotes = [...notes];
    newNotes.splice(idx, 1);
    setNotes(newNotes);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-0 min-h-screen">
      {/* Input...... */}

      <div className="bg-black w-full lg:w-1/2 h-1/2 lg:min-h-screen text-white p-10 lg:p-27 flex flex-col gap-7">
        <p className="font-semibold text-3xl lg:text-5xl">Add Notes</p>
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full border-3 border-white rounded-xl h-15 px-5 focus:outline-none focus:border-green-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Write Details here"
          className="w-full border-3 border-white rounded-xl h-30 px-5 py-3 resize-none focus:outline-none focus:border-green-600"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          className="w-full h-15 bg-white text-black rounded-xl font-bold text-xl hover:bg-gray-400 active:bg-green-600"
          onClick={(e) => makeNotes(e)}
        >
          Add Note
        </button>
      </div>

      {/* Output...... */}

      <div className="bg-black w-full lg:w-1/2 min-h-screen lg:min-h-screen lg:border-l-2 border-white text-white p-10 lg:p-27">
        <p className="font-semibold text-3xl lg:text-5xl">Recent Notes</p>
        <div className="mt-7 flex flex-wrap lg:gap-5 gap-3">
          {notes.length > 0 ? (
            notes.map((note, idx) => (
              // <div key={idx} className='bg-[url("https://img.freepik.com/premium-photo/clipboard-with-notepad-securely-attached-it-ready-taking-notes-writing-important-information_911620-28583.jpg")] bg-[length:100%_100%] bg-center bg-no-repeat lg:w-40 lg:h-55 w-25 h-38 rounded-2xl lg:p-5 p-2.5 flex flex-col gap-1.5 lg:gap-2.5'>
              <div
                key={idx}
                className='
                bg-[url("https://img.freepik.com/premium-photo/clipboard-with-notepad-securely-attached-it-ready-taking-notes-writing-important-information_911620-28583.jpg")]
                bg-no-repeat bg-center bg-size-[135%_133%_!important]
                lg:w-40 lg:h-55 w-25 h-38
                rounded-2xl lg:px-4.5 px-2.5 lg:py-4 py-3
                flex flex-col gap-0 lg:gap-2
                overflow-hidden
                relative'
              >
                <p className="font-bold text-[12px] lg:text-lg text-black underline">
                  {note.title}
                </p>
                <p className="text-gray-800 lg:text-sm text-[10px] lg:leading-3.5 leading-2.5">
                  {note.details}
                </p>
                <button
                  className="absolute bottom-2 right-2 lg:text-sm text-[8px]
                bg-red-800 text-white px-3 py-1 rounded-2xl active:bg-red-500"
                  onClick={() => {
                    deleteNote(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No Notes Added Yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
