import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselSection.css';

const CarouselSection = () => {
    return (
     <section>
          <h1 className='text-center pt-5'>Our Spacial Recipe </h1>
         <Carousel className='my-carousel'>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://media-cdn2.greatbritishchefs.com/media/x1ifrwul/img81389.whqc_1426x713q90.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
        <div className='pb-5 display-1'>
          <p>Food Valley</p>
          <h3>Beaf Special</h3>
        </div>
          
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://media-cdn2.greatbritishchefs.com/media/ribbanef/img81602.whqc_1426x713q90.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
           <div className='pb-5 display-1'>
            <p>Food Valley</p>
            <h3>Daily Special Recipe</h3>
           </div>
          
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://i.ytimg.com/vi/MPd9pgasN7g/maxresdefault.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <div className='pb-5 display-1'>
              <p>Food Valley</p>
              <h3>Chingri-Lota Special</h3>
            </div>
          
        </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
     </section>
      );
    }

export default CarouselSection;