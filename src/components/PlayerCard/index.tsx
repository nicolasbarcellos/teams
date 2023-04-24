import * as S from "./styles";

export type PlayerCardProps = {
  playerName?: string;
  onRemove?: () => void;
};

export function PlayerCard({ playerName, onRemove, ...rest }: PlayerCardProps) {
  return (
    <S.Container onPress={onRemove} {...rest}>
      <S.Person name="person" />
      <S.Name>{playerName}</S.Name>
      <S.Close name="close" />
    </S.Container>
  );
}
