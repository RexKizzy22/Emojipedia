import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(function (emoji) {
          return (
            <Entry
              key={emoji.id}
              name={emoji.name}
              meaning={emoji.meaning}
              emoji={emoji.emoji}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
