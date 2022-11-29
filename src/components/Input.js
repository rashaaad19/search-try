import './Input.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input=(props)=>{
return(<>
<div className='searchInput__container'>
<FontAwesomeIcon className='searchInput__Icon' icon="fa-solid fa-magnifying-glass" />
<input className='searchIput' type="text" placeholder='Where to go'></input>
</div>
</>)
}
export default Input