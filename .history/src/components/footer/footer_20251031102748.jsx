/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer3 b-t spacer">
      <Container>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14 text-center">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Salcho Since 1994.
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <a
                    href="https://github.com/salcho94"
                    target="_blank"
                    className="p-10 p-l-0 black"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://salcho94.github.io/"
                    target="_blank"
                    className="p-10"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
