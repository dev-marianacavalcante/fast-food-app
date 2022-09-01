import './index.css'
import Icon from '../Icon'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer'>
      <p>Total</p>

      <button>
      <Icon
                selected_icon={faCheck}
                color='#000'
                size='2x'
              />
      </button>
    
      
    </div>
  )
}
export default Footer