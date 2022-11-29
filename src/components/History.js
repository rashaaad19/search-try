import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './History.css'
const History=(props)=>{
    return(<>
    <div className='history__container'>
    <p> <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className="faHistory" />{props.title} </p>
    </div>
        </>)
}
export default History