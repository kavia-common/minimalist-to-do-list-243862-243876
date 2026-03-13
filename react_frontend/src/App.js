import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Minimal Hello World UI to ensure the app renders without errors. */
  return (
    <div className="App">
      <main className="App-main" role="main">
        <h1 className="App-title">Hello World</h1>
        <p className="App-subtitle">Your React app is running.</p>
      </main>
    </div>
  );
}

export default App;
