import React from "react";
import { DocumentFullScreen } from "@chiragrupani/fullscreen-react";

import "./App.css";

import Introduction from "./Introduction";
import Experience from './Experience';

function App() {
  const [isVisible, setVisible] = React.useState(true);
  const [isFullScreen, setFullscreen] = React.useState(false);

  const toggleExperience = () => {
    setVisible(!isVisible);
    setFullscreen(!isFullScreen);
  };

  return (
    <DocumentFullScreen isFullScreen={isFullScreen} onChange={toggleExperience}>
      <div className="App">
        <header className="App-header">
          {isVisible && <Introduction />}
          {isVisible && <Experience callback={toggleExperience}/>}
        </header>
      </div>
    </DocumentFullScreen>
  );
}

export default App;
