import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { useTheme } from "styled-components/native";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/app.routes";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

type NewGroupProps = NativeStackScreenProps<RootStackParamList, "new">;

export function NewGroup({ navigation }: NewGroupProps) {
  const [group, setGroups] = useState("");
  const { COLORS } = useTheme();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo");
      }
      console.log(error);
    }
  };

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setGroups}
        />
        <Button
          onPress={handleNewGroup}
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
}
