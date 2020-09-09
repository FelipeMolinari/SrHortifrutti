import React from 'react';

import { Container, SearchIcon } from './styles';
import { SearchProps } from '../../typescriptInterface';
const Search: React.FC<SearchProps> = ({ placeholder, ...rest }) => {
  return (
    <Container {...rest}>
      <SearchIcon />
      <input type="text" placeholder={placeholder} />
    </Container>
  );
};

export default Search;
