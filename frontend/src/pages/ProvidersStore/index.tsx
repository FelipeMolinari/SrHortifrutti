import React, { useEffect, useState } from 'react';

import { Container, GridContainer } from './styles';
import StoreCard from '../../components/StoreCard';
import Search from '../../components/Search';
import { UserOwner } from '../../typescriptInterface';
import MainApi from '../../services/api/MainApi';
const ProvidersStore: React.FC = () => {
  const [providers, setProviders] = useState<UserOwner[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [rejected, setRejected] = useState<boolean>(false);

  useEffect(() => {
    async function fetchingProviders() {
      try {
        const fetched: UserOwner[] = await MainApi.getProviders();
        setProviders(fetched);
        setLoading(false);
      } catch (error) {
        setRejected(true);
        setLoading(false);
      }
    }
    fetchingProviders();
  }, []);
  return (
    <Container>
      <div className="top-content">
        <div className="top-left">
          <h1>Nossos Parceiros</h1>
          <p>Procure por um hortifruti perto de você</p>
        </div>
        <Search className="search-input" placeholder="Procurar por endereço" />
      </div>
      <GridContainer>
        {loading && <h1> Carregando dados</h1>}
        {rejected && <h1>Erro ao carregar os lojistas</h1>}
        {providers?.map((provider) => {
          return <StoreCard key={provider.email} user={provider} />;
        })}
      </GridContainer>
    </Container>
  );
};

export default ProvidersStore;
