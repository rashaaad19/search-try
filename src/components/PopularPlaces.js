import "./PopularPlaces.css";
const PopularPlaces = (props) => {
  return <>
  <div className="popularPlace__card" >
  <img src={props.image} id="imageCard" alt=""></img>
  <p>{props.city}</p>
  </div>
  </>;
};
export default PopularPlaces;
