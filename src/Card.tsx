import { useState } from "react"
import { useQueries, useQuery } from "../convex/_generated/react";

enum CardState {
    default = "question" ,
    answerView = "answer"
}
export const Card = ({question, answer} : {question: string, answer: string}) => { 
    const [cardView, setCardView] = useState(CardState.default);

    return (
        <span color="blue" >
            <text color="red">{cardView == CardState.default ? question : answer}</text>
        </span>
    )
}