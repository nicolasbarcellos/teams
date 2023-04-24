import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/app.routes";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

type GroupsProps = NativeStackScreenProps<RootStackParamList, "groups">;

export function Groups({ navigation }: GroupsProps) {
  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  useEffect(() => {
    let subscribed = true;

    async function fetchData() {
      await fetchGroups();
    }

    if (subscribed) {
      fetchData();
    }

    return () => {
      subscribed = false;
    };
  }, [groups]);

  // AsyncStorage.clear();

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <GroupCard onPress={() => handleGroup(item)} title={item} />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button
        onPress={handleNewGroup}
        title="Criar nova turma"
        type="primary"
      />
    </S.Container>
  );
}
