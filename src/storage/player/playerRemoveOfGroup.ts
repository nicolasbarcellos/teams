import { playersGetByGroup } from "./playersGetByGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { Alert } from "react-native";

export const playerRemoveOfGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const storage = await playersGetByGroup(group);
    const filtered = storage.filter((player) => player.name !== playerName);
    const newPlayers = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, newPlayers);

    return newPlayers;
  } catch (error) {
    Alert.alert("Remover pessoa", "Não foi possível remover essa pessoa.");
    throw error;
  }
};
