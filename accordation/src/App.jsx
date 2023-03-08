

import {useState} from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'
const App = () => {

  const [questions,setQuestions] = useState(data)
  console.log(questions)
  return (
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map(question => {
              return <SingleQuestion
                        key={question.id} {...question}
                    />
            })
          }
        </section>
      </div>
    )
}

export default App