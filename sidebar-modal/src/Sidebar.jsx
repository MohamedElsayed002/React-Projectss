import React from 'react'
import { social , links } from './data'
import  {FaTimes} from 'react-icons/fa'


const Sidebar = ({showSidebar,setShowSidebar}) => {
  return (
    <aside className={`sidebar ${showSidebar ? 'show-sidebar' : null}`}>
        <div className="sidebar-header">
            <img style={{width : '59px'}} src="https://picsum.photos/200/300?grayscale" alt="log" />
            <button className="close-btn" onClick={() => setShowSidebar(false)}>
                <FaTimes/>
            </button>
        </div>
        <ul className="links">
            {
                links.map((link) => {
                    const {id,url,text,icon} = link
                    return (
                        <li key={id}>
                            <a href={url}> {icon} {text}</a>
                        </li>
                    )
                })
            }
        </ul>
         <ul className="social-icons">
            {
                social.map((link) => {
                    const {id,url,icon} = link
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })
            }
         </ul>
    </aside>
  )
}

export default Sidebar