export const Navbar = () => {
    return (
        <>
        <nav style={{display:"flex", justifyContent:"space-between", width: "100%", height:"5rem",padding: "0 120px", alignItems:"center", backgroundColor: "darkCyan", color:"white", marginBottom:"2rem", marginTop:"2rem"}}>
            <h1 style={{fontSize:"3rem", textShadow:"5px 5px 20px red"}}>What To Do?</h1>
            <img src="src/assets/logotodo.png" alt="logo" width={125} style={{borderRadius:"5rem"}}/>
        </nav>
        </>
    )
}    