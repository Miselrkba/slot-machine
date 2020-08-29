import React from "react";

import "./App.css";
import Bang from "./Bang";

function App() {
  
  return (
    <div className="App">
      <h1>Slot Machine</h1>
      <Bang />
      <Bang s1={'🐯'} s2={'🐯'} s3={'🐯'}/>
      <Bang />
    </div>
  );
}

export default App;


{/* <Bang s1={'🐯'} s2={'🐯'} s3={'🐯'} />
<Bang s1={'🐈'} s2={'🐯'} s3={'🦝'} />
<Bang s1={'🦝'} s2={'🐈'} s3={'🐯'} /> */}