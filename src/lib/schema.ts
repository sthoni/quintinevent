// src/lib/schemas/rsvp.ts
import * as v from "valibot";

// Status: yes / no / maybe
export const rsvpStatusSchema = v.picklist(["yes", "no", "maybe"]);

// Drink-Kategorien (eine Haupt-Präferenz)
export const drinkCategorySchema = v.picklist([
  "water",
  "softdrink",
  "beer",
  "wine",
  "mulled wine",
  "any",
  "specific",
] as const);

// Voller Record, wie er in PocketBase existiert
export const rsvpSchema = v.object({
  id: v.optional(v.string()),
  created: v.optional(v.string()),
  updated: v.optional(v.string()),

  name: v.pipe(v.string(), v.minLength(1, "Name ist erforderlich")),
  status: rsvpStatusSchema,

  food: v.optional(v.string()),
  drinkCategory: v.optional(drinkCategorySchema),
  drinkNote: v.optional(v.string()),
  music: v.optional(v.string()),
  comment: v.optional(v.string()),
});

// Nur das, was aus dem Formular kommt (kein id/created/updated)
export const rsvpInputSchema = v.omit(rsvpSchema, ["id", "created", "updated"]);

// Types für TS:
export type Rsvp = v.InferOutput<typeof rsvpSchema>; // Datensätze aus PocketBase
export type RsvpInput = v.InferInput<typeof rsvpInputSchema>; // Formulardaten
