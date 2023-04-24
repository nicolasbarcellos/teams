import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupCreate } from "@storage/group/groupCreate";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

export const groupRemoveByName = async (group: string) => {
  try {
    const storage = await groupsGetAll();

    const filtered = storage.filter((groupName) => groupName !== group);

    const newGroups = JSON.stringify(filtered);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, "");

    console.log(storage);
  } catch (error) {}
};
