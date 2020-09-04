import React from 'react';

import { Container, SearchIcon } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <SearchIcon />
      <input type="text" placeholder="Search" />
    </Container>
  );
};

export default Search;
