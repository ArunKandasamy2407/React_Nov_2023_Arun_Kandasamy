import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage;

function UncontrolledExample() {
  return (
    <Carousel style={{marginTop:'20px'}}>
      <Carousel.Item>
        <img src='https://images.apollo247.in/pub/media/magestore/bannerslider/images/n/i/nivea_winter_web.jpg?tr=w-400,q-80,f-webp,dpr-1.5,c-at_max'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.apollo247.in/pub/media/magestore/bannerslider/images/b/a/baby_festival_banner_web.jpg?tr=w-400,q-80,f-webp,dpr-1.5,c-at_max'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.apollo247.in/pub/media/magestore/bannerslider/images/s/i/simple_face_wash_web.jpg?tr=w-400,q-80,f-webp,dpr-1.5,c-at_max'></img>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;