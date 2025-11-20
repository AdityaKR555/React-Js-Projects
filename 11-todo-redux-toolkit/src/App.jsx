import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <div style={{minHeight:"100vh"}}>
      <Navbar />
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
