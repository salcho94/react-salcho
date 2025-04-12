import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <div className="static-slider10">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="align-self-center text-center">
                            <span className="label label-rounded label-inverse">welcome</span>
                            <h1 className="title">SALCHO</h1>
                            <h6 className="subtitle op-8">저의 사이트를 방문하실수 있습니다.<br /> 아래의 버튼을 눌러주세요</h6>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20" data-toggle="collapse" href="http://js94.kro.kr:3000/"><span>방문하기 <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HeaderBanner;
