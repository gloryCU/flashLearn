// import { useState } from 'react'
import './App.css'
import { useQuery,useConvexAuth } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";

function App() {
  // const [count, setCount] = useState(0)
  const topics = useQuery(api.topics.get);
  const { isAuthenticated } = useConvexAuth();

  return (
    <div className="App">
      {isAuthenticated ? <SignOutButton mode="modal" /> : <SignInButton mode="modal" />}
      {isAuthenticated ? "Logged in" : "Logged out or still loading"}
      {topics?.map(({ _id, title }) => (
        <div key={_id}>{title}</div>
      ))}
      
    </div>
  )
}

export default App
