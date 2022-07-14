import "./about.scss";
import { educationData } from "../../data/educationData";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillimages";

const About = () => {
  return (
    <div className="about">
      <div className="left">
      <div className="first">
        <h1 className="header">Who I am</h1>
        <p className="description">My name is Rasul. I'm web developer based in Baku, Azerbaijan.</p>
        <p className="desc2">I am a Front End Developer and pursuing my interest in Computer Science and take it to the level where I can make some significant contribution in the field of computer science that helps the masses.Also I am good at.</p>
      </div>
      <div className="skills" style={{display:"flex",width:"100%",justifyContent:"space-around",color:"black"}}>
        {skillsData.map((skill,id) => (
          <div className="skill-card" key={id} style={{width:"120px",height:"120px",borderRadius:"10px",boxShadow:"0px 5px 10px gray",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <img src={skillsImage(skill)} alt={skill} style={{width:"50px",height:"50px",borderRadius:"10px",marginBottom:"15px"}} />
            <h3>{skill}</h3>
          </div>
        ))}
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

      <div className="right" style={{width:"40vw",display:"flex",alignItems:"center",justifyContent:"start"}} ></div>
    </div>
  )
}

export default About