import { Toolbar, Typography } from "@mui/material";
import AppSearchBar from "./AppSearchBar";
import { CardDeck } from "./Deck";

export default function App() {
  return (
    <><main>
      <Typography variant="h1" component="span" sx={{ flexGrow: 1 }}>
        FlashLearn
      </Typography>
      <AppSearchBar/>
      <CardDeck /> </main>
    </>
      
  );
}
