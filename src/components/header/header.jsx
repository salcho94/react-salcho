/* eslint-disable */
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
    Container,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse,
    Row,
    Col,
    NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import logo from '../../assets/images/logos/logo.png';
import logo2 from "../../assets/images/logos/white-logo.png";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCssView, setIsCssView] = useState(false);
    const logoStyle = {
        filter: "invert(98%) sepia(2%) saturate(10%) hue-rotate(35deg) brightness(103%) contrast(104%)",
        height:'60px',
        width:'80px'
    }
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="page-wrapper">
            <div className="container-fluid">
                <div id="section">
                    <div className="header1 po-relative bg-dark">
                        <Container>
                            <Navbar className="navbar-expand-lg h2-nav">
                                <NavbarBrand href="#"><img style={logoStyle}  src={logo} alt="wrapkit" /></NavbarBrand>
                                <NavbarToggler onClick={toggle}><span className="ti-menu text-white"></span></NavbarToggler>
                                <Collapse isOpen={isOpen} navbar id="header1">
                                    <Nav navbar className="ml-auto mt-2 mt-lg-0">
                                        {isCssView &&
                                            <NavItem>
                                                <Link className="nav-link" to={"/components"}>
                                                    css example1
                                                </Link>
                                            </NavItem>
                                        }
                                        { isCssView &&
                                            <NavItem>
                                                <Link className="nav-link" to={"/custom-components"}>
                                                    css example2
                                                </Link>
                                            </NavItem>
                                        }
                                        <NavItem>
                                            <Link className="nav-link" to={"/"}>
                                                Home
                                            </Link>
                                        </NavItem>
                                        <NavItem> <Link to="#login" className="btn btn-light font-10" onClick={() =>{alert('준비중 입니다.')}}>로그인</Link>     <button className="btn btn-secondary font-10 rounded-circle p-1" onClick={() => setIsCssView(!isCssView)}>css</button></NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Header;
