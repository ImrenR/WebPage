  
import {Carousel} from "react-bootstrap";
import isa from "../img/isa.jpeg";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";
import "./app.css";

const Slider = () => {

  return (
    <Carousel fade autoPlay={true} interval={5000}>
      <Carousel.Item>
        <img className="w-100" src={isa} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={devops} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={about} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider