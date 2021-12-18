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
    <div className="text-center">
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
      <header className="flex flex-col min-h-screen text-3xl text-white bg-gray-800 justify-center items-center font-size">
        <img src={logo} className="h-80 hover:animate-spin" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className="bg-blue-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
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
            className="text-cyan-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-cyan-400"
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
