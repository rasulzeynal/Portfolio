import "./about.scss";
import { educationData } from "../../data/educationData";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import img from "../../assets/img/ab-img.png"

const About = () => {
  return (
    <div className="about">
      <div className="left">
      <div className="first">
        <h1 className="header">Who I am</h1>
        <p className="description">My name is Rasul. I'm web developer based in Baku, Azerbaijan.</p>
        <p className="desc2">During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.</p>
      </div>
      <div className="education">
        {educationData.map(edu => (
          <div className="card" data-aos="fade-up"   >
            <FontAwesomeIcon className="icon" icon={faGraduationCap} />
            <div className="education-right">
            <h5 className="uni-year">{edu.startYear}-{edu.endYear}</h5>
            <h2 className="uni">{edu.institution}</h2>
            <h4>{edu.course}</h4>
            </div>
          </div>
        ))}
        <h1>Education</h1>
      </div>
      </div>

      <div className="right" style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"center"}} ><img src={img} style={{width:"500px"}}/></div>
    </div>
  )
}

export default About