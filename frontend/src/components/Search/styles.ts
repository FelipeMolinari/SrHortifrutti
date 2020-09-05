import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  height: 4rem;
  width: 28rem;
  padding: 6px 7px 6px 6px;
  background: var(--commum-input);
  margin: 0;
  input {
    border: 0;
    text-decoration: none;
    background: transparent;
    color: #181818;
    font-weight: 400;
    height: 100%;
    flex: 1;
    font-size: 1.8rem;
  }
`;
export const SearchIcon = styled(IoIosSearch)`
  fill: #181818;
  margin-right: 6px;
  padding: 0.8rem;
  width: 4rem;
  height: 4rem;
`;
