import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import {AiFillEye} from 'react-icons/ai'
import axios from '../../api'
import './videohorizontal.scss'
import { Col, Row } from 'react-bootstrap';


const VideoHorizontal = () => {

    const seconds = moment.duration('100').asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    

    return (
        <Row className="videoHorizontal m-1 py-2 align-items-center">
            <Col 
                xs={6} 
                md={4}
                className="videoHorizontal_left"
            >
                <LazyLoadImage 
                    src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" 
                    effect="blur" 
                    className="videoHorizontal_thumbnail rounded-circle"
                    wrapperClassName="videoHorizontal_thumbnail-wrapper"
                />
                <span className="videoHorizontal_duration">{_duration}</span>
            </Col>

            <Col 
                xs={6} 
                md={8}
                className="videoHorizontal_right"
            >
                <p className="videoHorizontal_title mb-1">
                    Be a full stack developer in 1 month
                </p>

                <div className="videoHorizontal_details">
                    <AiFillEye /> {numeral(1000000).format("0.a")} views •
                    <span>{moment("2021-09-09").fromNow()}</span>
                </div>

                <div className="videoHorizontal_channel d-flex align-items-center my-1">
                    {/* <LazyLoadImage 
                        src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" 
                        effect="blue" 
                    /> */}
                    <p>Backbench Coder</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
