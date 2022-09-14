import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import logo from "../Assets/Image/logo.png"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CgShoppingBag } from 'react-icons/cg';
import { FaExchangeAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getcartdata, wishlistdata } from '../Reducers/productreducer';
export default function Header() {
    const productlist = useSelector((state) => state.detaildata.productdata);
    const cartdata = useSelector((store) => store.detaildata.cartdata);
    const wishlistData = useSelector((store) => store.detaildata.wishlistdata);
    const [total, setTotal] = useState(0);
    const [cartopen, setCartopen] = useState(false);
    const [wishopen, setWishopen] = useState(false);
    const dispatch = useDispatch();

    const updatecart = (detail, quantity) => {
        var cart = [...cartdata];
        var data2 = cartdata?.filter(val => val.product_detail?.id != detail.id);
        if (quantity) {
            var data = cartdata?.map(obj => (obj.product_detail?.id == detail.id ? Object.assign({}, { ...obj, quantity: quantity }) : obj))
            dispatch(getcartdata(data));
        } else {
            dispatch(getcartdata(data2));
        }
    }
    const wishRemove =(id)=>{
        var wish =[...wishlistData];
        var data2 = wishlistData?.filter(val => val != id);
        dispatch(wishlistdata(data2))
    }
    useEffect(() => {
        var newtotal = 0;
        cartdata?.map(val => newtotal += val.product_detail?.price * val.quantity);
        setTotal(newtotal)
    }, [cartdata])

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
                                            <AiOutlineHeart onClick={() => wishopen ? setWishopen(false) : setWishopen(true)}/>{wishlistData?.length ? <span className='wishlistcount'>{wishlistData?.length}</span> : ""}

                                            <div className={wishopen ? 'popupcart' : "d-none"}>

                                                <Row>

                                                    <Col lg={12}>
                                                        {wishlistData?.length ? <div className='drop_content_main'>
                                                            {productlist?.filter(value => wishlistData?.includes(value.id))?.map(val =>
                                                                <div className='drop-1'>
                                                                    <div className='drop-1-conten-img'>
                                                                        <Image className='popupimage' src={val?.thumbnail} alt="logo"></Image>
                                                                    </div>
                                                                    <div className='drop-1-conten'>
                                                                        <p>
                                                                            <span> {val?.title} </span>
                                                                            <span> {val?.price}$</span>
                                                                        </p>
                                                                        <p>
                                                                            <span> Brand </span>
                                                                            <span> {val?.brand} </span>
                                                                        </p>
                                                                       <p><Button className='wishbtn' onClick={()=>wishRemove(val?.id)}>Remove</Button></p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div> :
                                                            <div className='drop_content_main'>
                                                                <h3>Empty WhishList</h3>
                                                            </div>
                                                        }
                                                    </Col>
                                                </Row>

                                            </div>
                                        </li>
                                        <li className='menu-right-li' >
                                            <CgShoppingBag onClick={() => cartopen ? setCartopen(false) : setCartopen(true)} />{cartdata?.length ? <span className='cartcount'>{cartdata?.length}</span> : ""}


                                            <div className={cartopen ? 'popupcart' : "d-none"}>

                                                <Row>

                                                    <Col lg={12}>
                                                        {cartdata?.length ? <div className='drop_content_main'>
                                                            {cartdata?.map(val =>
                                                                <div className='drop-1'>
                                                                    <div className='drop-1-conten-img'>
                                                                        <Image className='popupimage' src={val.product_detail?.thumbnail} alt="logo"></Image>
                                                                    </div>
                                                                    <div className='drop-1-conten'>
                                                                        <p>
                                                                            <span> {val.product_detail?.title} </span>
                                                                            <span> {val.product_detail?.price * val.quantity}$</span>
                                                                        </p>
                                                                        <p>
                                                                            <span> Brand </span>
                                                                            <span> {val.product_detail?.brand} </span>
                                                                        </p>
                                                                        <p>
                                                                            <span> <Button className='qty-button' onClick={() => updatecart(val.product_detail, val.quantity + 1)}>+</Button>
                                                                                <input className='qty-input-cart' type="text" value={val?.quantity} readOnly />
                                                                                <Button className='qty-button' onClick={() => updatecart(val.product_detail, val.quantity - 1)}>-</Button></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className='drop_btm_text'>
                                                                <ul>
                                                                    <li>
                                                                        <p> <strong> Sub-Total </strong> </p>
                                                                        <p> <span> {total}$ </span> </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> <strong> Eco-Tax</strong> </p>
                                                                        <p> <span> 0$ </span> </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> <strong> Vat  </strong> </p>
                                                                        <p> <span> 0$</span> </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> <strong> Total </strong> </p>
                                                                        <p> <span> {total}$</span> </p>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className='drop_btn_main'>
                                                                <Button className='addtocart-button'>View Cart</Button>
                                                                <Button className='addtocart-button'>Chekout</Button>
                                                            </div>

                                                            {/* <p className='p-0 m-0' >{val.product_detail?.title}</p>
                                                                <p className='p-0 m-0'>{val.product_detail?.brand}</p>
                                                                <p className='p-0 m-0'><strong>Quantity : </strong>{val.quantity}</p> */}
                                                        </div> :
                                                            <div className='drop_content_main'>
                                                                <h3>Empty cart</h3>
                                                            </div>
                                                        }
                                                    </Col>
                                                </Row>

                                            </div>

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
