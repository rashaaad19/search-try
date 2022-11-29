import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer=()=>{
    return<>
    <div className='footer__container'>
        <div className='fontAwsome__container'>
    <FontAwesomeIcon className='fontAwsome onHover' icon="fa-solid fa-house" />
    <FontAwesomeIcon className='fontAwsome onHover' icon="fa-solid fa-magnifying-glass" />
    <FontAwesomeIcon className='fontAwsome onHover' icon="fa-solid fa-user" />
    </div>
    </div>
    </>
}
export default Footer