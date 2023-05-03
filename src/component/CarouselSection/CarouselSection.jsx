import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselSection.css';

const CarouselSection = () => {
    return (
        <Carousel className='my-carousel'>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://media-cdn2.greatbritishchefs.com/media/x1ifrwul/img81389.whqc_1426x713q90.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://media-cdn2.greatbritishchefs.com/media/ribbanef/img81602.whqc_1426x713q90.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://www.humppy.com/wp-content/uploads/2022/06/20220611_105732-780x470.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }

export default CarouselSection;