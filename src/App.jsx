import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => setCount(count + multiplier)

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg"
          alt="A plate of samosas"
          onClick={updateCount}
        />
      </div>
    </div>
  )
}

export default App