import { useState } from 'react'
// import reactLogo from './assets/react.sv
// import viteLogo from '/vite.svg'
import './App.css'
import './main.css'
import Header from './components/Header/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
