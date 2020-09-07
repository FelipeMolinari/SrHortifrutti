import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Header } from './styles';

import ContainerDashboardPages from '../../styles/components/ContainerDashboardPages';

const AddProduct: React.FC = () => {
  return (
    <ContainerDashboardPages>
      <Header>
        <AiOutlineArrowLeft />
        <div>
          <h1>Novo produto</h1>
          <p>Crie um produto novinho!</p>
        </div>
      </Header>
      <div className="main-add"></div>
    </ContainerDashboardPages>
  );
};

export default AddProduct;
