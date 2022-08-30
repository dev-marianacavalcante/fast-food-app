import Icon from '../Icon'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './index.css'

function AddOrder({click}) {
  return (
      <a onClick={click} className='position'>
        <div className="AddOrderButton">
          <Icon
            selected_icon={faPlus}
            color='white'
            size='2x'
          />
        </div>
      </a>
  )
}
export default AddOrder