import { env } from "$env/dynamic/private";
import PocketBase from "pocketbase";

const POCKETBASE_URL = env.POCKETBASE_URL;
const POCKETBASE_MAIL = env.POCKETBASE_MAIL;
const POCKETBASE_PASSWORD = env.POCKETBASE_PASSWORD;
const pb = new PocketBase(POCKETBASE_URL);

pb.autoCancellation(false);

if (POCKETBASE_MAIL && POCKETBASE_PASSWORD) {
  await pb
    .collection("users")
    .authWithPassword(POCKETBASE_MAIL, POCKETBASE_PASSWORD, {
      autoRefreshThreshold: 60 * 30,
    });
}

export default pb;

export const getRecords = async (collectionId: string) => {
  try {
    const records = await pb.collection(collectionId).getFullList();
    return records;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

export const getRecord = async (collectionId: string, id: string) => {
  try {
    const record = await pb.collection(collectionId).getOne(id);
    return record;
  } catch (error) {
    console.error("Error fetching record:", error);
    throw error;
  }
};

export const createRecord = async (collectionId: string, data: any) => {
  try {
    const record = await pb.collection(collectionId).create(data);
    return record;
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

export const updateRecord = async (
  collectionId: string,
  id: string,
  data: any,
) => {
  try {
    const record = await pb.collection(collectionId).update(id, data);
    return record;
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};

export const deleteRecord = async (collectionId: string, id: string) => {
  try {
    const record = await pb.collection(collectionId).delete(id);
    return record;
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
};

export const deleteRecords = async (collectionId: string, ids: string[]) => {
  try {
    const records = await Promise.all(
      ids.map((id) => pb.collection(collectionId).delete(id)),
    );
    return records;
  } catch (error) {
    console.error("Error deleting records:", error);
    throw error;
  }
};
