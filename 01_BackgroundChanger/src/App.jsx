import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("skyblue");
  const [activeColor, setActiveColor] = useState("");

  const colors = ["red", "green", "blue", "yellow", "pink", "brown", "orange", "white", "olive", "gray"];

  return (
    <>
      <div style={{backgroundColor: color, width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "end"}}>

          <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px", borderRadius: "30px", backgroundColor: "wheat", padding: "10px", border: "2px solid black"}}>

           {colors.map((clr) => (
          <button
            key={clr}
            style={{
              backgroundColor: clr,
              color: clr === "yellow" || clr === "white" || clr === "pink" || clr === "orange" ? "black" : "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              margin: "5px 8px",
              width: "85px",
              height: "35px",
              border: activeColor === clr ? "3px solid black" : "none",
              transform: activeColor === clr ? "scale(1.2)" : "scale(1)",
              transition: "all 0.2s ease"
            }}
            onClick={() => {
              setColor(clr);
              setActiveColor(clr);
            }}
          >
            {clr.charAt(0).toUpperCase() + clr.slice(1)}
          </button>
        ))}
          </div>

      </div>
    </>
  )
}

export default App;


// Pehle i did something like this, noiceeeee(abhi wala babu)
// return (
//     <>
//       <div style={{backgroundColor: color, width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "end"}}>

//           <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px", borderRadius: "30px", backgroundColor: "wheat", padding: "10px", border: "2px solid black"}}>

//             <button style={{backgroundColor: "red", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("red")}>Red</button>
//             <button style={{backgroundColor: "green", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("green")}>Green</button>
//             <button style={{backgroundColor: "blue", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("blue")}>Blue</button>
//             <button style={{backgroundColor: "yellow", color: "black", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("yellow")}>Yellow</button>
//             <button style={{backgroundColor: "pink", color: "black", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("pink")}>Pink</button>
//             <button style={{backgroundColor: "brown", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("brown")}>Brown</button>
//             <button style={{backgroundColor: "orange", color: "black", borderRadius: "20px", margin: "2px 10px", width: "90px"}} onClick={() => setColor("orange")}>Orange</button>
//             <button style={{backgroundColor: "white", color: "black", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("white")}>White</button>
//             <button style={{backgroundColor: "olive", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("olive")}>Olive</button>
//             <button style={{backgroundColor: "gray", borderRadius: "20px", margin: "2px 10px", width: "85px"}} onClick={() => setColor("gray")}>Gray</button>

//           </div>

//       </div>
//     </>
//   )

