import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import CustomButtom from '../CustomButton';

const AsideStore: React.FC = () => {
  return (
    <Container>
      <NavLink to="/store/out" activeClassName="actived" exact>
        <CustomButtom colorName={''} style={{ height: '8rem', width: '85%' }}>
          <span>Lojas</span>
        </CustomButtom>
      </NavLink>
      <NavLink to="/store/out/destaques" activeClassName="actived">
        <CustomButtom colorName={''} style={{ height: '8rem', width: '85%' }}>
          <span>Destaques</span>
        </CustomButtom>
      </NavLink>
    </Container>
  );
};

export default AsideStore;
