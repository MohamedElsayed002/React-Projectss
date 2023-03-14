import React , {useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { AppProvider } from './context'
import './index.css'



const App = () => {
  const [name , setName] = useState('')
  const inputRef = useRef()

  const focus = (e) => {
    console.log(e.target)
    inputRef.current.focus()
    inputRef.current.value = 'Some value are here '
  }
  return (
    <>
      <label htmlFor="name">Name</label>
      <input ref={inputRef} id='name' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={focus}>Focus</button>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
