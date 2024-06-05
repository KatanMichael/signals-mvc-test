import './App.css'
import { decreseCount, getCount, incrementCount } from './Controllers/CountController'
import { getAllPosts, getFirstPostBody, refreshPosts } from './Controllers/PostsController'

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
      <div>
        <button
        onClick={()=>{refreshPosts()}}
        >Get All Posts</button>
        <p>{getFirstPostBody()}</p>
      </div>
    </>
  )
}

export default App
