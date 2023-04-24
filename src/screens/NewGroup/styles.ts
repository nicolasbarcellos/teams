import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`;
