
import {useState} from 'react'
import SingleColor from './singleColor'
import Values from 'values.js'

const App = () => {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#f15025').all(1))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(1)
      setList(colors)
    }catch(err) {
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
          <h3>color generator</h3>
          <form onSubmit={handleSubmit}>
            <input  
               type="text" 
               value={color} 
               placeholder="#f15025"
               onChange={(e) => setColor(e.target.value)}
               className={`${error ? 'error' : null}`}
            />
            <button className="btn" type="submit">submit</button>
          </form>
      </section>
      <section className="colors">
        {
          list.map((color,index) => {
            return <SingleColor key={index} hexColor={color.hex} {...color} index={index} />
          })
        }
      </section>
    </>
  )
}

export default App