import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <br />
      made with <FontAwesomeIcon icon={faHeart} /> and{' '}
      <FontAwesomeIcon icon={faCoffee} />
      <br />
      © 2023 gloria lin
      <br />
      <br />
    </div>
  )
}

export default Footer
