import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 800;
  color: white;
  &:hover,
  &:focus {
    color: #b13a18;
  }
  &.active {
    color: #ffffff;
  }
`;
