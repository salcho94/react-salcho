/* eslint-disable */
import React  from 'react';
import Iframe from 'react-iframe'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';


const Chat = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Chat</h1>
                            <h6 className="subtitle">실시간으로 메세지를 전송 가능합니다 (2분 이내 답장 하겠습니다.)</h6>
                        </Col>
                            <a href="/#/" ><button className="btn btn-outline-danger" >취소</button></a>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className="m-t-40 p-3 rounded" style={{border: '3px solid'}}>
                        <Iframe url={process.env.REACT_APP_CHAT}
                                width="100%"
                                height="580px"
                                display="block"
                                position="relative"/>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Chat;
