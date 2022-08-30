import Icon from '../Icon'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './index.css'

function Collapse({text, icon, icon_color}) {
 
  return (
        <div className='collapse'>
          <p className='p'>{text}</p> 
            <Icon
            selected_icon={icon}
            color={icon_color}
            size='sm'
          />
        </div>
  )
}
export default Collapse