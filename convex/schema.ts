import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema(
  {
    cards: defineTable({
      index: s.number(),
      deckId: s.id("decks"),
      question: s.string(),
      answer: s.string(),
    }),
    decks: defineTable({
      name: s.string(),
      description: s.string(),
      cards: s.array(s.id("cards")),
    }),
  }
  //, { strict: false }
);
