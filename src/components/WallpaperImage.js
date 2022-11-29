// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './WallpaperImage.css'
const Header=(props)=>{
    return <>
    <div className="image__container">
    <img id='wallpaper' src={props.image1} alt=""></img>
    </div>
        </>
}
export default Header