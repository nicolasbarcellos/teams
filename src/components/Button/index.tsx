import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
} & TouchableOpacityProps;

export function Button({ title, type = "primary", ...rest }: ButtonProps) {
  return (
    <S.Button activeOpacity={0.8} type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}
