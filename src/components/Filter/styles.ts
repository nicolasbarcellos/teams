import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FilterProps } from ".";

type ContainerProps = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, isActive }) => css`
    padding: 8px 12px;
    height: 38px;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    border-radius: 4px;
    ${isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
