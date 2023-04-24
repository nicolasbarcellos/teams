import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: ${theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 4px;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Person = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;

export const Close = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.RED,
}))`
  margin-right: 16px;
`;
