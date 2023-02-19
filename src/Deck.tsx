import { Deck } from "../convex/deck"
import {Card} from "./Card"
import { useQuery } from "../convex/_generated/react";
import { useState } from "react";

export const CardDeck = () => {
    const decks = useQuery("deck:list") ?? [];
    console.log({decks})

    const [openDeck, setOpenDeck] = useState(true);
    
    return (
        <section>
            {decks.map((deck) => (
                <span key={deck.id.toString()} onClick={() => setOpenDeck(true)}>
                    <h1>{deck.name}</h1>
                    <h3>{deck.description}</h3>
                {openDeck && <PopulateDeck deck={deck} />}
                </span>
            ))
            }
        </section>)
}

const PopulateDeck = ({deck} : {deck: Deck}) => {
    return (
        <section>
                {deck.cards.map((card) => (
                    <Card { ...card }/>
                ))}
        </section>
    )
}