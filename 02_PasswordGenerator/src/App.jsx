import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(7);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllowed) str += "1234567890";
      if(charAllowed) str += "!@#$%^&*";
      for (let i = 1; i < length; i++) {
          const index = Math.floor(Math.random()*(str.length + 1));
          pass = pass + str.charAt(index);
      }
      setPassword(pass);
  }, [numAllowed, charAllowed, length, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  },[length, numAllowed, charAllowed, PasswordGenerator]);

  const copyPassToClipboard = () => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
    // alert("Password copied!");
  }

  return (
    <div style={{width: "100vw", height: "100vh"}}>
        <div
        style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "65rem", height: "14rem", margin: "100px auto", backgroundColor: "gray", borderRadius: "20px", padding: "20px", border: "3px solid orange"}}>
          <h3 style={{fontSize: "25px", marginBottom: "10px"}}>Random Password Generator</h3>
          <div>
            <div style={{textAlign: "center", margin: "10px"}}> 
              <input type="text" value={password} readOnly ref={passwordRef} style={{width: "40rem", height: "2.5rem", color: "orange", fontWeight: "bolder", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", paddingLeft: "15px", fontSize: "22px"}}/>
              <button onClick={copyPassToClipboard} style={{width: "5rem", height: "2.5rem", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", backgroundColor: "darkBlue", color: "white", fontSize: "larger"}}>copy</button>
            </div>
            <div style={{marginTop: "20px"}}>
              <input type="range" id='len' min={4} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}/>
              <label htmlFor="len">Length : {length}</label>
              <input type='checkbox' defaultChecked={numAllowed} id='numAllow' onChange={() => {setNumAllowed((prev) => !prev)}}/>
              <label htmlFor="numAllow">Numbers</label>
              <input type='checkbox' defaultChecked={charAllowed} id='charAllow' onChange={() => {setCharAllowed((prev) => !prev)}}/>
              <label htmlFor="charAllow">Characters</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
