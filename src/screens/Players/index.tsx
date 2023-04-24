import { Highlight } from "@components/Highlight";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { Filter } from "@components/Filter";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/app.routes";
import { PlayerStorageDTO } from "src/types";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { playerRemoveOfGroup } from "@storage/player/playerRemoveOfGroup";
import { groupRemoveByName } from "@storage/player/groupRemoveByName";
import { AppError } from "@utils/AppError";

type PlayersProps = NativeStackScreenProps<RootStackParamList, "players">;

export function Players({ navigation, route }: PlayersProps) {
  const [team, setTeam] = useState("Time A");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const { COLORS } = useTheme();

  const { group } = route.params;

  const handleAddNewPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo player", "Adicione um novo player.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        Alert.alert("Nova pessoa", "Não foi possível adicionar");
      }
    }
  };

  const handleRemovePlayer = async (playerName: string) => {
    await playerRemoveOfGroup(playerName, group);
    fetchPlayersByTeam();
  };

  const fetchPlayersByTeam = async () => {
    const players = await playersGetByGroupAndTeam(group, team);
    setPlayers(players);
    return players;
  };

  const handleRemoveGroup = async () => {
    await groupRemoveByName(group);
    navigation.navigate("groups");
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Input
        placeholder="Nome do participante"
        placeholderTextColor={COLORS.GRAY_300}
        icon={<Plus size={24} color={COLORS.GREEN_700} />}
        value={newPlayerName}
        onChangeText={setNewPlayerName}
        onAddPlayer={handleAddNewPlayer}
      />

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          renderItem={({ item }) => (
            <Filter
              onPress={() => setTeam(item)}
              isActive={item === team}
              title={item}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
        />
        <S.NumbersOfPlayers>{players?.length}</S.NumbersOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        renderItem={({ item }) => (
          <PlayerCard
            onRemove={() => handleRemovePlayer(item.name)}
            playerName={item.name}
          />
        )}
        keyExtractor={(item) => item.name}
      />

      <Button
        onPress={handleRemoveGroup}
        title="Remover Turma"
        type="secondary"
      />
    </S.Container>
  );
}
