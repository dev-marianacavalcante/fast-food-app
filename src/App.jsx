import React from 'react'
import './App.css'
import Header from "./components/Header"
import AddOrder from './components/Add-Order'
import Collapse from './components/Collapse'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import OrderModal from './components/Modal'

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  function test(params) {
    setModalShow(!modalShow)
  }
  
  return (
    <div className='divAbsolut'> 
      <Header/>
      <AddOrder
        click={test}
      />
      <Collapse
        text="Pedidos em andamento"
        icon={faAngleDown}
        icon_color="gray"
      />
      <Collapse
        text="Pedidos concluídos"
        icon={faAngleDown}
        icon_color="gray"
      />

      <OrderModal
        show={modalShow}
        onHide={test}
      />
    </div>
  )
}

export default App
