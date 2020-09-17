import React, { useEffect, useState } from 'react';

import { AiOutlineDollarCircle, AiOutlineEnvironment } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import {
  Container,
  HeaderContent,
  Main,
  GridContainer,
  ProductsContainer,
  WelcomeContainer,
  RatingContainer
} from './styles';

import ReviewCard from '../../components/ReviewCard';
import EmptyStore from '../../assets/images/empty-store.svg';
import HeaderBottom from '../../components/HeaderBottom';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../../components/ProductCard';
import {
  GalleryResponseInterface,
  ProductProps,
  UserOwner
} from '../../typescriptInterface';
import ReviewForm from '../../components/ReviewForm';
import MainApi from '../../services/api/MainApi';
import CustomCarousel from '../../components/CustomCarousel';
interface LocationState {
  user: UserOwner;
  path: string;
}
interface ParamTypes {
  id: string;
}
const StoreInside: React.FC = ({}) => {
  const [user, setUser] = useState<UserOwner>();
  const [gallery, setGallery] = useState<GalleryResponseInterface[]>([]);
  const [productsUser, setProductsUser] = useState<ProductProps[]>([]);
  const { avaiablesProducts, loading, rejected } = useCart();

  const { id } = useParams<ParamTypes>();
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUser = await MainApi.showProvider(id);
        const fetchedGallery = await MainApi.getImages(id);
        setUser(fetchedUser);
        const productsUser = avaiablesProducts.filter((product) => {
          return product.owner_id?._id === fetchedUser._id;
        });
        setGallery(fetchedGallery);
        setProductsUser(productsUser);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  function averageValue() {
    return productsUser
      .map((product) => {
        const value = parseFloat(product.price);
        console.log(value, product);
        return value;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
      .toFixed(2);
  }
  return (
    <Container>
      {user && (
        <>
          <HeaderBottom>
            <HeaderContent>
              <img src={user.avatar_url} alt="hortifruti" />
              <div>
                <span className="store-name">
                  {user.name} - <span>{user.neighborhood}</span>
                </span>

                <div className="line">
                  <AiOutlineDollarCircle />
                  <span>Valor médio dos produtos</span>
                  <div className="dot" />
                  <span>R$ {averageValue()}</span>
                </div>

                <div className="line">
                  <AiOutlineEnvironment />
                  <span>
                    {user.street} n{user.number}
                  </span>
                </div>
              </div>
            </HeaderContent>
          </HeaderBottom>
          <Main>
            <WelcomeContainer>
              <span className="section-title">Bem vindo!</span>
              <div className="div-welcome">
                <p>{user.description ? user.description : 'Loja sem descrição'}</p>
                {gallery.length !== 0 && (
                  <CustomCarousel images={gallery}></CustomCarousel>
                )}
              </div>
            </WelcomeContainer>
            <ProductsContainer>
              <span className="section-title">Ofertas</span>

              {productsUser.length !== 0 ? (
                <GridContainer>
                  {productsUser.map((product) => {
                    const { name, price, _id, type } = product;
                    return <ProductCard product={{ type, name, price, _id }} />;
                  })}
                </GridContainer>
              ) : (
                <div className="empty-store">
                  <img className="landing-image" src={EmptyStore} alt="Imagem vendedor" />

                  <h1>Sem ofertas no momento</h1>
                </div>
              )}
            </ProductsContainer>
            <RatingContainer>
              <span className="section-title">Avaliações</span>
              <div className="content-review">
                <ReviewCard user_id={user._id ? user._id : ''} />
                <ReviewForm user_rated_id={user._id ? user._id : ''} />
              </div>
            </RatingContainer>
          </Main>
        </>
      )}
    </Container>
  );
};

export default StoreInside;
