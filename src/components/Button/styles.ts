import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";

type ButtonProps = {
  type: "primary" | "secondary";
};

const ButtonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.GREEN_700};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.RED_DARK};
  `,
};

export const Button = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, type }) => css`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 56px;
    border-radius: 6px;
    ${!!type && ButtonModifiers[type](theme)}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
