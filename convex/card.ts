import { Deck } from "./deck"
import { Document, Id } from "./_generated/dataModel"

export type Card = Document<"cards">;
//     {
//     index: number,
//     deckId: Id<"deck">,
//     meta: {
//         question: string,
//         answer: string
//     }
// }