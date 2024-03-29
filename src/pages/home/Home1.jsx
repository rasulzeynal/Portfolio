import { useTypewriter } from "react-simple-typewriter";
import 'react-simple-typewriter/dist/index';
import { Button } from "react-bootstrap";
import pdf from "../../assets/cv/Rasul.pdf";

const Home1 = () => {
    const {text} = useTypewriter({
        words: ['Front End Developer'],
        loop: 0, 
        typeSpeed: 140,
        deleteSpeed: 100,
        delaySpeed: 1000
        })
  return (
    <div className="home">
      <h1 className="me">Hello, I am Rasul</h1> 
      <h3 className="position">I'm a{' '} 
      <span style={{color:"white"}}>
        {text}  
      </span> 
      </h3>
      <div style={{textAlign:"center"}}>
      <Button href={pdf} target="_blank" className="btn btn-cv">Download CV</Button>
      <Button href="https://wa.me/+994507345063" target="_blank" className="btn btn-contact">Contact</Button>
    </div>
    </div>
  )
}

export default Home1;