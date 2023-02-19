import { useState } from "react"
import { useQueries, useQuery } from "../convex/_generated/react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

enum CardState {
    default = "question" ,
    answerView = "answer"
}

const card = ({ question, answer }: { question: string, answer: string }) => { 
    const [cardView, setCardView] = useState(CardState.default);

    return (
        // <span color="blue" >
        //     <text color="red">{cardView == CardState.default ? question : answer}</text>
        // </span>
        <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {cardView == CardState.default ? "Question:" : "Answer:"}
          </Typography>
          
          <Typography variant="body2">
          {cardView == CardState.default ? question : answer}
     
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </React.Fragment>
    )
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DeckCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}