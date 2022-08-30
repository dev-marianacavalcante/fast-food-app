import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from '../Dropdown';
import Footer from '../Footer';
import ListaHorizontal from '../Lista-Horizontal';
import './index.css'
import Icon from '../Icon'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function OrderModal(props) {
  return (
    
    <Modal
      {...props}
      className='Modal'
      backdropClassName="Overlay"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header>
        <div className='header'>
          <Dropdown/>

          <a onClick={props.onHide} >
            <div>
            <Icon
                selected_icon={faXmark}
                color='red'
                size='2x'
              />
            </div>
          </a>
        </div>
      </Modal.Header>

      <Modal.Body>
        <ListaHorizontal/>
      </Modal.Body>
      
      <Footer/>
    </Modal>
  );
}

export default OrderModal