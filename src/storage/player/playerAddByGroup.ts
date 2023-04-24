import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "src/types";
import { playersGetByGroup } from "./playersGetByGroup";
import { Alert } from "react-native";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storage = await playersGetByGroup(group);

    const playerAlreadyExists = storage.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      return Alert.alert("Novo player", "Esse player já está adicionado aqui.");
    }

    const data = JSON.stringify([...storage, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, data);
  } catch (error) {
    throw error;
  }
}
