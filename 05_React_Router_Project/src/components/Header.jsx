import { Link, NavLink } from "react-router-dom";
import {useState} from 'react'

function Header() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header style={{ background: "#eee", padding: "10px 70px", display: "flex", justifyContent: "space-around", alignItems: "center", height: "6rem", borderBottom : "2px solid darkOrange"}}>
      <div>
      <img src="src/assets/qelogo.png" alt="logo" width={80} style={{borderRadius:"50px"}} />
      </div>
      <nav>
        <div style={{ position: "relative", display: "inline-block" }}
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}>
        <NavLink to="/" style={({isActive}) => ({
          margin: "30px", color: isActive ? "darkorange" : "black", fontWeight: isActive ? "bold" : "700", textDecoration: "none", fontSize: "larger"
        })}>Home</NavLink>
         {isDropdownVisible && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                listStyle: "none",
                margin: 0,
                minWidth: "120px",
                zIndex: 100,
              }}
            >
              <li style={{ padding: "5px 10px" }}>
                <NavLink
                  to="/home1"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    textDecoration: "none",
                  })}
                >
                  Home 1
                </NavLink>
              </li>
              <li style={{ padding: "5px 10px" }}>
                <NavLink
                  to="/home2"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    textDecoration: "none",
                  })}
                >
                  Home 2
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <NavLink to="/about" style={({isActive}) => ({
          margin: "30px", color: isActive ? "darkorange" : "black", fontWeight: isActive ? "bold" : "700", textDecoration: "none", fontSize: "larger"
        })}>About</NavLink>
        <NavLink to="/contact" style={({isActive}) => ({
          margin: "30px", color: isActive ? "darkorange" : "black", fontWeight: isActive ? "bold" : "700", textDecoration: "none", fontSize: "larger"
        })}>Contact</NavLink>
        <NavLink to="/github" style={({isActive}) => ({
          margin: "30px", color: isActive ? "darkorange" : "black", fontWeight: isActive ? "bold" : "700", textDecoration: "none", fontSize: "larger"
        })}>Github</NavLink>
      </nav>
      <div style={{display: "flex", gap: "20px", justifyContent: "center", alignItems: "center"}}>
        <Link to="" style={{color: "black", fontSize: "larger", fontWeight: "700", textDecoration: "none"}}>Log in</Link>
        <button style={{backgroundColor: "darkOrange", padding: "12px 8px", borderRadius: "12px", color: "white", fontWeight: "700", fontSize: "15px"}}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
