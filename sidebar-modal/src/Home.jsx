import React , {useState} from 'react'
import {FaBars} from 'react-icons/fa'


const Home = ({setShowModal,setShowSidebar}) => {


  return (
    <main>
        <button className="sidebar-toggle" onClick={() => setShowSidebar(true)}>
            <FaBars/>
        </button>
        <button onClick={() => setShowModal(true)} className="btn">show modal</button>
    </main>
  )
}

export default Home