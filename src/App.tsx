import "./App.css";
import { Profile } from "@/components/Profile";
import logo from "./logo.svg";
import { people } from "./data";
import { useState } from "react";

/* eslint-disable max-lines-per-function */
export const App = () => {
  const diffNum = 1,
    initialNum = 0,
    [count, setCount] = useState(initialNum);

  return (
    <div className="app">
      <section>
        <h1>Amazing scientists</h1>
        {people.map((person) => (
          <Profile
            key={person.id}
            name={person.name}
            imageId={person.imageId}
          />
        ))}
      </section>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((num) => num + diffNum)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};
