import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .fom-title {
    font-weight: 400;
    margin-top: 2.4rem;
  }
  .form-description {
    margin-top: 1.6rem;
    width: 60%;
    color: var(--color-secundary-text);
  }
`;

export const FieldsContainer = styled.ul`
  border-radius: 1.6rem;
  overflow: hidden;
  border: 1px solid var(--border);
  width: 100%;
  border: 1px solid var(--commum-border);
  margin-top: 1.6rem;

  li {
    border-top: 1px solid var(--commum-border);
  }
  li:first-child {
    border-top: 0;
  }
`;
