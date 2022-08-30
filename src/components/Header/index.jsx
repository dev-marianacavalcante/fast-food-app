import Icon from "../Icon"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Avatar from "../Avatar"
import './index.css'

function Header() {
  return (
    <div className="header"> 
        <Icon
        selected_icon={faBars}
        color='gray'
        size='lg'
        className="bars"
      /> 

      <Avatar/>
    </div>
  )
}
export default Header