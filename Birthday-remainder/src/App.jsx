import List from "./List"
import {useState } from 'react'
import data from "./data"


const App = () => {

  const [people,setPeople] = useState(data)

  const Elements = people.map(person => {
    return (
      <List key={person.id}
            name={person.name}
            age={person.age}
            image={person.image}
      />
    )
  })
  return (
    <main>
      <section className="container">
          <h3>{people.length} Birthdays today</h3>
          {Elements}
          <button onClick={() => setPeople([])}>CLEAR All</button>
      </section>
    </main>
  )
}

export default App
