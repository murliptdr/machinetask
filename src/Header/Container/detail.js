import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHome, FaPencilAlt } from 'react-icons/fa'
import { SideBySideMagnifier } from "react-image-magnifiers";
import ImageGallery from "react-image-gallery";
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import Rating from '@mui/material/Rating';

export default function Detail() {
    const [images, setImages] = useState([{
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    }
    ]);
    const [currentImageUrl, setCurrentImageUrl] = useState("https://picsum.photos/id/1018/1000/600/");

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
                                     
                                     <p> <strong>   Available options </strong> </p>

                                     <div>
                                         <input className='form-control' type="date" />
                                     </div>
                                </div>


                                <div className='bdr'>
<p> Product Available</p>
                                </div>



                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}
