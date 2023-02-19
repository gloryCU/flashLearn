import { Card } from "./card";
import { Document, Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";

export type Deck = {
    id: Id<"decks">,
    name: string,
    description: string,
    cards: Card[],
}

export const list = query(async ({ db }): Promise<Deck[]> => {
    console.log("Querying decks...")
    const cards = await db.query("cards").collect();
    const decksById = new Map<string, Card[]>();
    
    for (const card of cards) {
        console.log({card})
        if (decksById.has(card.deckId.id)) {
            decksById.get(card.deckId.id)?.push(card);
        } else {
            decksById.set(card.deckId.id, [card]);
        }
    }
    console.log({decksById})
    const decks: Deck[] = [];
    for (const [deckId, cards] of decksById.entries()) {
        const id = new Id("decks", deckId);
        console.log({ id });
        const deck = (await db.get(id));
        if (!deck) continue;
        const { description, name } = deck!;
        decks.push({
            id,
            cards,
            description,
            name,
        })
    }
    return decks;
});

export const add = mutation(async ({ db }, name: string, description: string, cards: []) => {
    return db.insert("decks", {name,description,cards});
});



