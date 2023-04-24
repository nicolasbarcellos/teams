import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type GroupCardProps = {
  title: string;
} & TouchableOpacityProps;

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <S.Container {...rest}>
      <S.UsersLogo />
      <S.Text>{title}</S.Text>
    </S.Container>
  );
}
