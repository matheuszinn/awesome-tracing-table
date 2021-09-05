import React from "react";

import './Experience.css';

const Experience = (props) => {

    return (
        <button className="App-Button" onClick={props.callback}>
              Show me the experience.
        </button>
    );
}

export default Experience;