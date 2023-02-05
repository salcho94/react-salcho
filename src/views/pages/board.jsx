/* eslint-disable */
import React  from 'react';
import { Row, Col, Container, Table } from 'reactstrap';
import { getBoard } from '../../apis/boardApi.js';

const Board = () => {
    let test = () =>{
        console.log('실행댐');
        getBoard();
    }


    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Board</h1>
                            <h6 className="subtitle">게시판 입니다.</h6>
                        </Col>
                            <a href="/#/" ><button className="btn btn-outline-danger" >취소</button></a>
                            <button className="btn btn-outline-danger" onClick={() => test()}>TEST</button>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Table dark className="text-center">
                        <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
}

export default Board;
