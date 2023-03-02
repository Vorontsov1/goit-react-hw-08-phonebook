import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </div>
  );
};

export default AuthNav;
