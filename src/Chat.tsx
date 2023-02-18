import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export const Chat = ({ name }: { name: string }) => {
  const messages = [] as any;

  const [newMessageText, setNewMessageText] = useState("");
  return (
    <section>
      <h2>Chat</h2>
      <ul>{messages}</ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNewMessageText("");
          alert(name + ": " + newMessageText);
        }}
      >
        <input
          value={newMessageText}
          onChange={(event) => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input
          type="submit"
          value={"Send as " + name}
          disabled={!newMessageText}
        />
      </form>
    </section>
  );
};
export const GetName = ({ finished }: any) => {
  const [name, setName] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        finished(name);
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value.substring(0, 100))}
        placeholder="Name"
      />
      <input type="submit" value={"Join" + (name ? " as " + name : "")} />
    </form>
  );
};
