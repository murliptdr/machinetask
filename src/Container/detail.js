import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaHome, FaPencilAlt } from 'react-icons/fa'
import { SideBySideMagnifier } from "react-image-magnifiers";
import ImageGallery from "react-image-gallery";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { productdatalist, productshow } from '../Reducers/productreducer';

export default function Detail() {
    const dispatch = useDispatch();
    const productlist = useSelector((state) => state.detaildata.productdata)
    const id = useSelector((state) => state.detaildata.id)
    const [prodetail, setProdetail] = useState([])
    const [images, setImages] = useState([{
        original: 'https://picsum.photos/id/1018/1000/1000/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/1000/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/1000/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
    ]);
    const [currentImageUrl, setCurrentImageUrl] = useState("https://picsum.photos/id/1018/1000/1000/");

    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=5")
            .then(res => {
                dispatch(productdatalist(res.data));
                dispatch(productshow(res.data.products[0]?.id));
                setProdetail(res.data.products[0]);
                var data = []
                res.data.products[0].images.map(val => {
                    data.push({
                        original: val,
                        thumbnail: val
                    })
                })
                setImages(data);
                setCurrentImageUrl(res.data.products[0].images[0]);
            })
            .catch(err => {
                console.log("murli",err)
            })
    }, []);

    // useEffect(() => {
    //         var prodata = productlist?.filter(val => val.id == id);
    //         setProdetail(prodata[0]);
    //                 var data = []
    //                 prodata[0]?.map(val => {
    //                     data.push({
    //                         original: val,
    //                         thumbnail: val
    //                     })
    //                 })
    //                 setImages(data)
    //                 setCurrentImageUrl(prodata[0]?.images[0])
    // }, [id]);

    const SetView = (event, index) => {
        setCurrentImageUrl(images[index].original)
    }
    return (
        <div>
            <Container fluid className='p-0'>
                <div className='heading-detail'>
                    <FaHome />
                    <span className='heading-text'>{prodetail?.title}</span>
                </div>
            </Container>
            <Container className='p-0'>
                <div className='detail-top'>
                    <Row>
                        <Col lg={6}>

                            <Row>
                                <Col>
                                    <SideBySideMagnifier
                                        alwaysInPlace={false}
                                        className="image-to-magnify"
                                        fillAvailableSpace={false}
                                        imageSrc={currentImageUrl}
                                        largeImageSrc={currentImageUrl}
                                    />
                                    <div className='p-5'>
                                        <ImageGallery
                                            items={images}
                                            onThumbnailClick={SetView}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            showNav={false}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col>
                                    <div className='small-images'>
                                        <ImageGallery
                                            items={images}
                                            onThumbnailClick={SetView}
                                            showFullscreenButton={false}
                                            showPlayButton={false}
                                            showNav={false}
                                        />
                                    </div>
                                </Col>
                            </Row> */}
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div>
                                    <h2>{prodetail.title}</h2>
                                    <p>
                                        <Rating
                                            name="simple-controlled"
                                            value={Number(prodetail.rating)}
                                        // onChange={(event, newValue) => {
                                        //     setValue(newValue);
                                        // }}
                                        />
                                        <span className="review-count"> 1 review</span>
                                        <span className="review-count1"> <FaPencilAlt /> Write A Review</span>
                                    </p>
                                </div>

                                <div>
                                    <h3> 95.72$ </h3>

                                    <p> Ex Tax: 78.46$</p>

                                    <p> Price in reward Points: 400</p>

                                    <p> <strong>Available options </strong> </p>

                                    <div>
                                        <input className='form-control' type="date" />
                                    </div>
                                </div>


                                <div className='bdr'>
                                    <p className='bdr-p'> Product Available In Stock : {prodetail.stock}</p>
                                    <div>
                                        <p>Qty <span>
                                            <Button className='qty-button'>+</Button>
                                            <input className='qty-input' type="text" value={0} />
                                            <Button className='qty-button'>-</Button>
                                        </span>
                                            <Button className='addtocart-button'>Add To Cart</Button>
                                        </p>
                                        <p className='pt-2 mb-2'>
                                            <span>Add To Wishlist</span>
                                            <span style={{ paddingLeft: '30px' }}>Add To Compare</span>
                                        </p>
                                    </div>

                                </div>
                                <div>
                                    <p><strong>Brand :</strong><span className='p-detail'>{prodetail.brand}</span></p>
                                    <p><strong>Product Code :</strong><span>{prodetail.id}</span></p>
                                    <p><strong>Reward Points :</strong><span>400</span></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='d-tab'>
                    <Row>
                        <Col lg={12} className="tab-col">
                            <Button className='tab-button btn-active'>Description</Button>
                            <Button className='tab-button'>Specification</Button>
                            <Button className='tab-button'>Reviews (1)</Button>
                        </Col>
                    </Row>
                    <hr />
                    <div className='p-5 pt-3 pb-3'>
                        <p>{prodetail.description}</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </div>
                    <Row className='pb-5'>
                        <Col lg={6}>
                            <Image src='https://picsum.photos/id/1018/650/250/' alt="logo"></Image>
                        </Col>
                        <Col lg={6}>
                            <Image src='https://picsum.photos/id/1018/650/250' alt="logo"></Image>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className='pt-5 pb-3'>
                        <Col className='d-rp'>
                            <h3><strong>Related Products</strong></h3>
                        </Col>
                    </Row>
                    <Row className='pb-5'>
                        <Col className='related-list pt-5 pb-5' >x
                            {productlist?.products?.map(val =>
                                <div key={val.id} onClick={dispatch(productshow(val.id))}>
                                    <Image className='pb-4' src={val.thumbnail}></Image>
                                    <p className='p-0 m-0'>{val.title}</p>
                                    <p className='p-0 m-0'>{val.brand}</p>
                                    <p className='p-0 m-0'><strong>{val.price}$</strong></p>
                                </div>
                            )}
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}
