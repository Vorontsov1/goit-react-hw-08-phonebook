import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;

