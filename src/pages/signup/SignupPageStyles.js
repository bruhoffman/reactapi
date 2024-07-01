import { styled } from "styled-components";
import { colors } from "../../constants/colors";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 280px;
`;

export const StyledButton = styled.button`
  padding: 0.5em;
  border-radius: 10px;
  border: none;
  background-color: ${colors.primary};
  color: ${colors.darkNeutral};
  font-weight: bold;
  width: 120px;
  box-shadow: 0 0 3px ${colors.darkNeutral};
  align-self: center;

  &:hover {
    background-color: ${colors.primaryVariant};
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 280px;
  margin: 1em 0;
`;

export const StyledInput = styled.input`
  padding: 0.5em;
  border-radius: 10px;
  border: 1px solid ${colors.darkNeutral};
`;
