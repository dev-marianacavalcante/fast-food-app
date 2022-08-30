import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon({selected_icon, color, size}) {
  return (
    <FontAwesomeIcon icon={selected_icon} color={color} size={size}/>
  )
}
export default Icon
