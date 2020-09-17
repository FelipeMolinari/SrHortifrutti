import React from 'react';
import Carousel from 'nuka-carousel';
import { Container, ImageContainer, DeleteButton } from './styles';
import { GalleryResponseInterface } from '../../typescriptInterface';
import AuthorizedApi from '../../services/api/AuthorizedApi';
import { useToasts } from 'react-toast-notifications';
interface CarouselProps {
  images: GalleryResponseInterface[];
  isAdminPage?: boolean;
}

const CustomCarousel: React.FC<CarouselProps> = ({ images, isAdminPage }) => {
  const { addToast } = useToasts();
  async function handleDelete(id: string) {
    console.log(id);
    try {
      await AuthorizedApi.deleteImage(id);
      addToast('Foto deletada com sucesso', { appearance: 'success' });
    } catch (error) {
      console.log(error);
    }
  }
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
          console.log(item.url);
          return (
            <ImageContainer key={item._id} src={item.url}>
              {isAdminPage && <DeleteButton onClick={() => handleDelete(item._id)} />}
            </ImageContainer>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default CustomCarousel;
