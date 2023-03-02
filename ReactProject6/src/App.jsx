
import {useState,useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import data from './data'

const App = () => {

  const [loading,setLoading] = useState(true)
  const [jobs,setJobs] = useState(data)
  const [value,setValue] = useState(0)

const {company,dates,duties,title} = jobs[value]
console.log(company,dates,duties,title)


  return (
    <section className="section">
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item,index) => {
              return <button className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)} key={item.id}>{item.company}</button>
            })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty,index) => {
              return <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"/> <p>{duty}</p>
              </div>
            })
          }
        </article>
      </div>
    </section>
  )
}

export default App