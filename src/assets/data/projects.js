import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "RentEase",
    desc: "A responsive home rental website with robust user authentication features enabled secure user registration and login functionalities.",
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Password generator",
    desc: "A beginner-friendly website that generates random strong passwords with uppercase, lowercase, numbers and symbols, featuring a copy icon for easy use.",
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: "Shopping Sphere",
    desc: "An eCommerce responsive shopping website facilitating easy addition, editing, and deletion of products, along with category and attribute management",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "My Portfolio",
    desc: "The portfolio is made using ReactJs.",
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: "Quiz App",
    desc: "A beginner-friendly website that generates quizzes and returns score.",
    img: ProjectImg,
  },
];

export default projects;
