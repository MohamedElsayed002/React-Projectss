


import React from 'react'
//rafec
import { links } from './data'
const Sidebar = () => {
  return (
    <>
        <h4>sidebar</h4>
        <div className="links-container show-container">
            <ul className="links">
                {
                    links.map(link => {
                        const {id,url,text} = link
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Sidebar