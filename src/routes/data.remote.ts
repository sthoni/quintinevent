import { form, query } from "$app/server";
import pb from "$lib/pocketbase";
import { rsvpInputSchema } from "$lib/schema";

export const getRsvps = query(async () => {
  try {
    const records = await pb.collection("rsvps").getFullList();
    return records;
  } catch (error) {
    console.error("Error fetching rsvps:", error);
    throw error;
  }
});

export const createRsvp = form(
  rsvpInputSchema,
  async ({ name, status, drinkCategory }) => {
    try {
      const record = await pb
        .collection("rsvps")
        .create({ name, status, drinkCategory });
      return record;
    } catch (error) {
      console.error("Error creating rsvp:", error);
      throw error;
    }
  },
);
