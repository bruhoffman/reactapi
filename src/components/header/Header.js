import { HeaderContainer, Logo, StyledButton } from "./HeaderStyles";
import LogoImg from "../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const ButtonSelector = () => {
    switch (pathname) {
      case "/":
        return null;
      case "signup":
        return (
          <StyledButton onClick={() => goToLogin(navigate)}>Login</StyledButton>
        );
      default:
        return (
          <StyledButton onClick={() => goToLogin(navigate)}>
            Logout
          </StyledButton>
        );
    }
  };
  return (
    <HeaderContainer>
      <Logo onClick={() => goToLogin(navigate)} src={LogoImg} />
      <ButtonSelector />
    </HeaderContainer>
  );
};
