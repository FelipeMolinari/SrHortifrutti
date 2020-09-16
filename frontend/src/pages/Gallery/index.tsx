import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import DropZone from '../../components/DropZone';
import { Container, Content, Header, Main } from './styles';
import { GalleryResponseInterface } from '../../typescriptInterface/index';
import MainApi from '../../services/api/MainApi';
import CustomCarousel from '../../components/CustomCarousel';
const Gallery: React.FC = () => {
  const [uploadedDone, setUploadedDone] = useState<GalleryResponseInterface[]>([]);
  const { user } = useAuth();
  useEffect(() => {
    async function fetchFiles() {
      if (user && user._id) {
        const fetcheds: GalleryResponseInterface[] = await MainApi.getImages(user._id);
        setUploadedDone(fetcheds);
      }
    }
    fetchFiles();
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <h1>Sua galeria.</h1>
          <p>Sua galeria será apresentado na sua página dentro dentro da loja!</p>
        </div>
      </Header>
      <Main>
        <Content>
          {uploadedDone.length !== 0 ? (
            <CustomCarousel images={uploadedDone} />
          ) : (
            <h1 style={{ marginTop: 20 }}>Ainda não possuí fotos na galeria</h1>
          )}
          <DropZone setUploadedDone={setUploadedDone} uploadedDone={uploadedDone} />
        </Content>
      </Main>
    </Container>
  );
};

export default Gallery;
