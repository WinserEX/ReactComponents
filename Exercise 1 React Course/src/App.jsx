import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShowTime from './Components/ShowTime/showTime'



function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <ShowTime />
        </div>
      )
}

export default App
