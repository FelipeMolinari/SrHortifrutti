import React from 'react';
import Carousel from 'nuka-carousel';
import { Container, ImageContainer } from './styles';
import { GalleryResponseInterface } from '../../typescriptInterface';
interface CarouselProps {
  images: GalleryResponseInterface[];
}
const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Container>
      <Carousel
        animation={'zoom'}
        cellAlign={'center'}
        cellSpacing={5}
        dragging={true}
        initialSlideHeight={1}
        initialSlideWidth={5}
        slidesToShow={1}
        slideWidth={0.2}
        width={'100%'}
        defaultControlsConfig={{
          pagingDotsClassName: 'slider-dots',
          containerClassName: 'slider-container',
          nextButtonClassName: 'slider-button',

          prevButtonClassName: 'slider-button'
        }}
      >
        {images.map((item) => {
          return <ImageContainer key={item._id} src={item.url}></ImageContainer>;
        })}
      </Carousel>
    </Container>
  );
};

export default CustomCarousel;
