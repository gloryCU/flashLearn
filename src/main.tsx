import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StyledEngineProvider } from "@mui/material";

// Hack: we're defaulting to Ian's backend so
// we can get it running before you set up your own
// backend.
// Run `rm convex.json` then `npx convex init` to
// set up your own backend.
const backendUrl =
  import.meta.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(backendUrl);

ReactDOM.render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
      
    </ConvexProvider>
  </StrictMode>,
  document.getElementById("root")
);
