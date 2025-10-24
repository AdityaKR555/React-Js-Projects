import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";


function App() {
  return (
    <>
     <Header />
     <main style={{padding: "20px", height: "135vh"}}>
        <Outlet />
     </main>
     <Footer />
    </>
  );
}

export default App;
