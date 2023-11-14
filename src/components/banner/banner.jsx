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
                            <h6 className="subtitle op-8">안녕하세요 저한테 채팅을 하실수 있습니다.<br /> 아래의 버튼을 눌러주세요</h6>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20" data-toggle="collapse" href="/#/chat"><span>Chat? <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default HeaderBanner;
