import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`;

export const HeaderList = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px;
  `}
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    margin-left: auto;
  `}
`;
