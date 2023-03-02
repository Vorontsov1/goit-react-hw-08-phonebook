import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Username = styled.p`
  padding: 12px;
  font-weight: 500;
  color: #ffffff;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 50px;
  background-color: inherit;
  color: #ffffff;
  font-family: inherit;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #b13a18;
    color: #ffffff;
  }
`;
