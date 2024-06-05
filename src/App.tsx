import './App.css'
import { decreseCount, getCount, incrementCount } from './Controllers/CountController'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {incrementCount()}}>
          Increse Count
        </button>
        <button onClick={() => {decreseCount()}}>
          Decrese Count
        </button>
        <p>
        count is {getCount()}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
