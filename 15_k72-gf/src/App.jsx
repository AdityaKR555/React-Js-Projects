import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agency' element={<Agency/>} />
        <Route path='/products' element={<Products/>} />
     </Routes>
    </>
  )
}

export default App
