import * as S from "./styles";

export type FilterProps = {
  isActive?: boolean;
  onPress?: () => void;
  title: string;
};

export function Filter({
  isActive = false,
  onPress,
  title,
  ...rest
}: FilterProps) {
  return (
    <S.Container onPress={onPress} {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
