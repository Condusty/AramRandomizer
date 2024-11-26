import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './Message'
import TeamRandomizer from './TeamRandomizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Message />
        <TeamRandomizer />
      </div>
    </>
  )
}

export default App
