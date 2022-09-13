import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from "../Assets/Image/logo.png"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CgShoppingBag } from 'react-icons/cg';
import { FaExchangeAlt } from 'react-icons/fa';
export default function Header() {
    return (
        <>
        <div className='main-container'>
        <Container fluid>
            <div className='main'>
                <Row>
                    <Col lg={8}>
                        <Row className='menu-row'>
                            <Col lg={3}>
                                <div className='menu-left'>
                                    <div className='menu-logo'>
                                        <Image src={logo} alt="logo"></Image>
                                    </div>
                                    <div className='menu-icon'>
                                        <AiOutlineMenu />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <div>
                                    <InputGroup className='searchbox'>
                                        <Form.Control
                                            className='searchboxinput'
                                            placeholder="Search Products..."
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                        <AiOutlineSearch className='search-icon' />
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <div className='menu-right'>
                            <ul className='menu-right-ul' >
                                <li className='menu-right-li'>
                                    <Form.Select aria-label="Default select example" className='menuselect'>
                                        <option>My Account</option>
                                    </Form.Select>
                                </li>
                                <li className='menu-right-li'>
                                    <FaExchangeAlt />
                                </li>
                                <li className='menu-right-li'>
                                    <AiOutlineHeart />
                                </li>
                                <li className='menu-right-li'>
                                    <CgShoppingBag />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        </div>
        <Container fluid className='p-0'>
            <div className='nav-main'>
                <ul className="nav-ul">
                    <li className='nav-li'>Home</li>
                    <li className='nav-li'>Fashion</li>
                    <li className='nav-li'>Gadgets</li>
                    <li className='nav-li'>Electronics</li>
                    <li className='nav-li'>Appliances</li>
                    <li className='nav-li'>AutoParts</li>
                    <li className='nav-li'>Kids Toys</li>
                    <li className='nav-li'>Furniture</li>
                    <li className='nav-li'>Grocery</li>
                    <li className='nav-li'>Tool</li>
                    <li className='nav-li'>More</li>
                </ul>
            </div>
        </Container>
        </>
    )
}
