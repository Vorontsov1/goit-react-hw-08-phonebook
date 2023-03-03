import { StyledNavLink } from './AuthNav.styled';
import { FcApproval } from 'react-icons/fc';

const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <FcApproval />
      <StyledNavLink to="/login">Log in</StyledNavLink>
    </div>
  );
};

export default AuthNav;
