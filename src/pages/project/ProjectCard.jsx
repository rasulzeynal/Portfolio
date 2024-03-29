import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props) => {
  console.log(props.imgPath);
  return (
    <Card className="project-card-view col-xs-12 ">
      <div className="project-card-image">
        <Card.Img
          variant="top"
          src={props.imgPath.url}
          style={{ height: "100%" }}
          alt="card-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="project-card-title">
          {props.imgPath.name}
        </Card.Title>
        <Card.Text>{props.imgPath.desc}</Card.Text>
        <div className="project-card-buttons">
          <Button
            className="project-card-button"
            variant="secondary"
            href={props.imgPath.github}
            target="_blank"
          >
            <BsGithub /> &nbsp; GitHub
          </Button>
          {props.imgPath.demo && (
            <Button
              className="project-card-button"
              variant="secondary"
              href={props.imgPath.demo}
              target="_blank"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
