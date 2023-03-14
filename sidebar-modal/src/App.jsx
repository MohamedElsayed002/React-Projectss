

import React , {useState} from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
const App = () => {

  const [showModal, setShowModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  console.log(showSidebar)
  return (
    <div>
      <Home setShowModal={setShowModal} setShowSidebar={setShowSidebar}/>
      <Modal setShowModal={setShowModal} showModal={showModal}/>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}

export default App