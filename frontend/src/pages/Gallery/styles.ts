import styled, { css } from 'styled-components';
export const Container = styled.div``;

const dragActive = css`
  border-color: #78e5d5;
`;
const dragReject = css`
  border-color: #e57878;
`;
interface DragInterface {
  isDragActive: any;
  isDragReject: any;
}
export const Wrapper = styled.div`
  padding: 1.6rem;
  background-color: var(--commum-card);
  border-radius: 0.8rem;
`;
export const DropContainer = styled.div<DragInterface>`
  border: 1px dashed var(--commum-card);
  background-color: var(--commum-card);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: height 0.2s ease;
  padding: 1.6rem 0rem;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;

export const UploadMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0rem;
  .default {
    color: #999;
  }
  .success {
    color: #78e5d5;
  }
  .error {
    color: #e57878;
  }
`;
