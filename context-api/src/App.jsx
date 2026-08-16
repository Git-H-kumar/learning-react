import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme}>
       {/* as children */}
        <h2>this is navbar</h2> 
        <h2>we can call it navbar</h2> 
      </Navbar>
    </div>
  )
}

export default App