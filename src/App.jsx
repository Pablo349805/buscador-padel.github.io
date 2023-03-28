import { useState } from 'react'
import './App.css'
import {MyRoutes} from "./routes/Routes"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <MyRoutes/>
    </div>
  )
}

export default App