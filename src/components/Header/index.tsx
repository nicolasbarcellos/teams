import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();
  const handleGoHome = () => {
    navigation.navigate("groups");
  };
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoHome}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
}
