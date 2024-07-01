import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 72px;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10em;
`;

export const Logo = styled.img`
  height: 72px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  background-color: ${colors.lightNeutral};
  color: ${colors.darkNeutral};
  font-weight: bold;
  width: 80px;
  box-shadow: 0 0 3px ${colors.darkNeutral};

  &:hover {
    background-color: ${colors.primaryVariant};
    cursor: pointer;
  }
`;
