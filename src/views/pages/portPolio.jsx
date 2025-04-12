/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import ProjectCard from "../components/portPolio/ProjectCard";
import projects from '../components/portPolio/projects.json';

const Portfolio = () => {
    // 개발 경력 기간 계산
    let now = new Date();
    let then = new Date("November 11,2020");
    const gapInDays = Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
    const years = Math.floor(gapInDays / 365);
    const days = gapInDays - (years * 365);

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">경력 및 기술서</h1>
                            <h6 className="subtitle">
                                안녕하세요 개발을 시작한지 {years}년 {days}일 된 개발자 salcho 입니다.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title"><strong>진행 프로젝트 목록</strong></h2>
                            <h6 className="subtitle">
                                안녕하세요 제가 개발자로 근무하며 그동안 진행(참여)한 프로젝트 목록입니다.
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Portfolio;
