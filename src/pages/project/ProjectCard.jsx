import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {Card, CardBody, CardImg,CardTitle, CardText, Button} from "reactstrap"

const ProjectCard = (props) => {
    console.log(props.imgPath)
  return (
    <Card className="project-card-view col-xs-12  col-md-3 " style={{marginRight:"5px",marginBottom:"30px",padding:"0"}}>
    <CardImg variant="top" src={props.imgPath.url}   alt="card-img"/>
    <CardBody>
        <CardTitle style={{textAlign:"center",flexWrap:"nowrap",width:"100%"}}>{props.imgPath.name}</CardTitle>
        <CardText >
          {props.imgPath.desc}
        </CardText>
        <div style={{justifyContent:"space-around",display:"flex"}}>
        <Button variant="primary" href={props.ghLink} target="_blank" style={{marginBottom:"20px",width:"100px"}}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px",marginBottom:"20px",width:"100px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}</div>
      </CardBody>
    </Card>
  )
}

export default ProjectCard