import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    height: 90px;
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
  `}
`;

export const UsersLogo = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))``;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    margin-left: 16px;
  `}
`;