import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaHome, FaPencilAlt } from 'react-icons/fa'
import { SideBySideMagnifier } from "react-image-magnifiers";
import ImageGallery from "react-image-gallery";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Rating from '@mui/material/Rating';
import axios from 'axios';

export default function Detail() {
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
    const [productlist, setProductlist] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products?limit=5")
        .then(res=>{
            console.log(res)
        })
    },[])
    const SetView = (event, index) => {
        setCurrentImageUrl(images[index].original)
    }
    return (
        <div>
            <Container fluid className='p-0'>
                <div className='heading-detail'>
                    <FaHome />
                    <span className='heading-text'>Comfortable Anti Pollution Multi Layers</span>
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
                                    <h2>Comfortable Anti Pollution Multi Layers</h2>
                                    <p>
                                        <Rating
                                            name="simple-controlled"
                                            value={3}
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
                                    <p className='bdr-p'> Product Available In Stock : 1000</p>
                                    <div>
                                        <p>Qty <span>
                                            <Button className='qty-button'>+</Button>
                                            <input className='qty-input' type="text" />
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
                                    <p><strong>Brand :</strong><span className='p-detail'>Hewlett-Packard</span></p>
                                    <p><strong>Product Code :</strong><span>21</span></p>
                                    <p><strong>Reward Points :</strong><span>300</span></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='d-tab'>
                    <Row>
                        <Col lg={12} className="tab-col">
                            <Button className='tab-button btn-active'>Add To Cart</Button>
                            <Button className='tab-button'>Add To Cart</Button>
                            <Button className='tab-button'>Add To Cart</Button>
                        </Col>
                    </Row>
                    <hr />
                    <div className='p-5 pt-3 pb-3'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
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
                        <Col className='related-list pt-5 pb-5' >
                            <div>
                                <Image className='pb-4' src="https://picsum.photos/id/1018/200/200"></Image>
                                <p className='p-0 m-0'>Haier HWPM 58-020 Fully</p>
                                <p className='p-0 m-0'>Automatic System</p>
                                <p className='p-0 m-0'><strong>95.92$</strong></p>
                            </div>
                            <div>
                                <Image className='pb-4' src="https://picsum.photos/id/1018/200/200"></Image>
                                <p className='p-0 m-0'>Haier HWPM 58-020 Fully</p>
                                <p className='p-0 m-0'>Automatic System</p>
                                <p className='p-0 m-0'><strong>95.92$</strong></p>
                            </div>
                            <div>
                                <Image className='pb-4' src="https://picsum.photos/id/1018/200/200"></Image>
                                <p className='p-0 m-0'>Haier HWPM 58-020 Fully</p>
                                <p className='p-0 m-0'>Automatic System</p>
                                <p className='p-0 m-0'><strong>95.92$</strong></p>
                            </div>
                            <div>
                                <Image className='pb-4' src="https://picsum.photos/id/1018/200/200"></Image>
                                <p className='p-0 m-0'>Haier HWPM 58-020 Fully</p>
                                <p className='p-0 m-0'>Automatic System</p>
                                <p className='p-0 m-0'><strong>95.92$</strong></p>
                            </div>
                            <div>
                                <Image className='pb-4' src="https://picsum.photos/id/1018/200/200"></Image>
                                <p className='p-0 m-0'>Haier HWPM 58-020 Fully</p>
                                <p className='p-0 m-0'>Automatic System</p>
                                <p className='p-0 m-0'><strong>95.92$</strong></p>
                            </div>


                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}
