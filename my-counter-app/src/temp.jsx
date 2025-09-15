
import { useState } from 'react'
import githubLogo from './assets/github.svg'  // Make sure you have this logo image
import twitterLogo from './assets/twitter.svg' // And this one too
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} className="logo" alt="GitHub logo" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} className="logo react" alt="Twitter logo" />
        </a>
      </div>
      <h1>GitHub + Twitter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the GitHub and Twitter logos to learn more
      </p>
    </>
  )
}

export default App

