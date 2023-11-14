/* eslint-disable */
import React  from 'react';
import {Row, Col, Container, Table, Card, CardBody} from 'reactstrap';



const PortPolio = () => {
    let now = new Date();
    let then = new Date("November 11,2020");
    let gap = now.getTime() - then.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    let year = Math.floor(gap/365);
    let day = gap - (year * 365)
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Portfolio</h1>
                            <h6 className="subtitle">안녕하세요 개발을 시작한지 {year}년 {day}일 된 개발자 salcho 입니다.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title"><strong>진행 프로젝트 목록</strong></h2>
                            <h6 className="subtitle">안녕하세요 제가 개발자로 근무하며 그동안 진행(참여)한 프로젝트 목록입니다.</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>공정 경쟁 지원 시스템</strong></h5>
                                    <h6><strong>기간 : 2020년 11월 - 2021년 03월</strong></h6>
                                    <p>역할 : 신규 구축 진행</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Java","Jquery","JavaScript","SpringFrameWrok","MyBatis",
                                                "Jsp","Mysql","Html","Css","Jstl"].map((data,i) =>{
                                                    return(
                                                        <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                    )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>콘텐츠분쟁조정위원회</strong></h5>
                                    <h6><strong>기간 : 2021년 03월 - 2021년 12월</strong></h6>
                                    <p>역할 : 기능개선 및 유지보수</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Java","Jquery","JavaScript","Tibero","SpringFrameWrok","MyBatis",
                                                "Jsp","Mysql","Html","Css","Jstl"].map((data,i) =>{
                                                return(
                                                    <button key={i}  className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>국립국어원 한국어 교원</strong></h5>
                                    <h6><strong>기간 : 2021년 06월 - 2021년 12월</strong></h6>
                                    <p>역할 : 고도화 및 리뉴얼 진행</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Java","Jquery","JavaScript","Cubrid","SpringFrameWrok","MyBatis",
                                                "Jsp","Mysql","Html","Css","Jstl","BootStrap"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>한솔 신기한 나라 Live</strong></h5>
                                    <h6><strong>기간 : 2022년 02월 - 2022년 04월</strong></h6>
                                    <p>역할 : 프론트단 개발 및 수정</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Jquery","JavaScript","thymeleaf"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>한솔 신기한 나라 관리자</strong></h5>
                                    <h6><strong>기간 : 2022년 02월 - 2022년 06월</strong></h6>
                                    <p>역할 : 부분개발</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Java","Jquery","JavaScript","SpringBoot","MyBatis",
                                                "Jsp","Mysql","Html","Css","Jstl"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>AltiCast (피플카)</strong></h5>
                                    <h6><strong>기간 : 2022년 04월 - 2022년 09월</strong></h6>
                                    <p>역할 : VOC 응대 및 부분개발</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["TypeScript","Swagger","axios","React"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>국방부 사이트 프론트 리뉴얼</strong></h5>
                                    <h6><strong>기간 : 2022년 09월 - 2022년 12월</strong></h6>
                                    <p>역할 : 프론트 리뉴얼 개발 작업진행</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Jquery","JavaScript","JSP","Jstl"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <CardBody>
                                    <h5 className="font-medium m-b-3"><strong>휴머스온 TMS 웹 관리자 화면 (현대해상) </strong></h5>
                                    <h6><strong>기간 : 2023년 01월 - 2022년 07월</strong></h6>
                                    <p>역할 : 휴머스온 TMS 웹 사이트 접목 및 부분개발 진행</p>
                                    <p className="m-b-0 font-14">
                                        {
                                            ["Jquery","JavaScript","JSP","Oracle","Jstl","Java","SpringFrameWork","Maven","Mybatis"].map((data,i) =>{
                                                return(
                                                    <button key={i} className="btn-outline-info mr-1 mb-1 radius">{data}</button>
                                                )
                                            })
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortPolio;
