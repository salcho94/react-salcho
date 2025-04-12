import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import TechButton from "./TechButton";

const ProjectCard = ({project}) => {
    return(
        <Col md="4">
            <Card className="card-shadow">
                <CardBody>
                    <h5 className="font-medium m-b-3">
                        <strong>{project.title}</strong>
                    </h5>
                    <h6>
                        <strong>기간 : {project.period}</strong>
                    </h6>
                    <p>역할 : {project.role}</p>
                    <p className="m-b-0 font-14">
                        {project.techs.map((tech, i) => (
                            <TechButton key={i} tech={tech} />
                        ))}
                    </p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProjectCard;