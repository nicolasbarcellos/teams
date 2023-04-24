import { ActivityIndicator } from "react-native";
import * as S from "./styles";

export function Loading() {
  return (
    <S.Container>
      <ActivityIndicator />
    </S.Container>
  );
}
