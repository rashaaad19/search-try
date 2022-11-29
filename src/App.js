import Header from "./components/WallpaperImage";
import Footer from "./components/Footer.js";
import Input from "./components/Input";
import History from "./components/History";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PopularImageSlider from "./components/image__slider/PopularImageSlider"
import ActivityImageSlider from "./components/image__slider/ActivityImageSlider";
import NearbyImageSlider from "./components/image__slider/NearbyImageSlider";
library.add(faHouse, faMagnifyingGlass, faUser,faClockRotateLeft);
const wallpaper__image = [
  {
    image1: "/assets/images/mountain_view.jpg",
  },
];
const history__object = [
  {
    title: "Paris",
    index: 0,
  },
  {
    title: "Amestrdam",
    index: 1,
  },
  {
    title: "Milan",
    index: 2,
  },
  {
    title: "Rome",
    index: 3,
  },
  {
    title: "New York",
    index: 4,
  },
  {
    title: "Casablanca",
    index: 5,
  },
];

// const popular__card=[{
//   id:'1',
//   image:'/assets/images/1.jpg',
//   city:"Austria"
// },
// {
//   id:'2',
//   image:'/assets/images/2.jpg',
//   city:"Budapest"
// },
// {
//   id:'3',
//   image:'/assets/images/3.jpg',
//   city:"Tokyo"
// },
// {
//   id:'4',
//   image:'/assets/images/4.jpg',
//   city:"Seville"
// }]


function App() {

  return (
    <>
      <Header image1={wallpaper__image[0].image1}></Header>
      <div className="overAll__container">
      <div className="container">
        <History title={history__object[0].title}></History>
        <History title={history__object[1].title}></History>
        <History title={history__object[2].title}></History>
        <History title={history__object[3].title}></History>
        <History title={history__object[4].title}></History>
        <History title={history__object[5].title}></History>
        
      </div>
      <Input></Input>
      <h2>Popular Places</h2>
      <PopularImageSlider></PopularImageSlider>
      <h2>Activties</h2>
    <ActivityImageSlider></ActivityImageSlider>
    <h2>Nearby Places</h2>
    <NearbyImageSlider></NearbyImageSlider>
      <div className="card__container">
      {/* <PopularPlaces image={popular__card[0].image} city={popular__card[0].city}></PopularPlaces>
      <PopularPlaces image={popular__card[1].image} city={popular__card[1].city}></PopularPlaces>
      <PopularPlaces image={popular__card[2].image} city={popular__card[2].city}></PopularPlaces>
      <PopularPlaces image={popular__card[3].image} city={popular__card[3].city}></PopularPlaces> */}      
      </div>

      </div>




<Footer></Footer>
      
    </>
  );
}

export default App;
