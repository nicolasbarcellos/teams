import { ReactNode } from "react";
import * as S from "./styles";
import { TextInputProps } from "react-native";

export type InputProps = {
  icon?: ReactNode;
  onAddPlayer?: () => void;
} & TextInputProps;

export function Input({ icon, onAddPlayer, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Input {...rest} hasIcon={!!icon} />
      {!!icon && <S.Icon onPress={onAddPlayer}>{icon}</S.Icon>}
    </S.Container>
  );
}
