import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";

import "./App.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  const players = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Hello ${__APP_NAME__}`}</p>
        <p>{`This is version ${__APP_VERSION__}`}</p>
        <p>
          <Button
            type="button"
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
      </header>
      <main>
        {players.map((player) => (
          <TextField id={`player-${player}`} label={`Jugador ${player}`} />
        ))}
      </main>
    </div>
  );
}

export default App;
