import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {Card, CardBody, CardImg,CardTitle, CardText, Button} from "reactstrap"

const ProjectCard = (props) => {
    console.log(props.imgPath)
  return (
    <Card className="project-card-view">
    <CardImg variant="top" src={props.imgPath.url} alt="card-img"/>
    <CardBody>
        <CardTitle>{props.imgPath.title}</CardTitle>
        <CardText style={{ textAlign: "justify" }}>
          {props.imgPath.title}
        </CardText>
        <Button variant="primary" href={props.ghLink} target="_blank">
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
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </CardBody>
    </Card>
  )
}

export default ProjectCard