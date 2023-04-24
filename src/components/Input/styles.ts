import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type InputProps = {
  hasIcon: boolean;
};

export const Container = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `}
`;

export const Input = styled(TextInput)<InputProps>`
  ${({ theme, hasIcon }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    height: 56px;
    padding: 16px;
    padding-right: ${hasIcon ? "60px" : "16px"};
    flex: 1
    border-radius: 6px;
  `}
`;

export const Icon = styled.TouchableOpacity`
  ${({ theme }) => css`
    position: absolute;
    right: 16px;
  `}
`;
