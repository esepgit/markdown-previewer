import { useState, useEffect } from 'react'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import './App.css'

function App() {
  const [input, setInput] = useState(
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n"
  );
  const [visibility, setVisibility] = useState(true);

  const handleChange = (event) => {
    const html = marked.parse(event.target.value);
    document.getElementById('preview').innerHTML = html;
    setInput(event.target.value);    
  }

  const handleClick = () => {
    const properties = visibility ? {visibility: "hidden", position: "absolute"} : {visibility: "visible", position: "static"};
    const element = document.getElementById('editor-wrap');
    element.style.visibility = properties.visibility;
    element.style.position = properties.position;
    setVisibility(!visibility);
  }

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse(input);
  }, []);

  return (
    <>
    <div id="editor-wrap" className='editor-wrap'>
      <div className="editor-header">
        <p>Editor</p>
      </div>
      <textarea id="editor" cols="70" rows="20" value={input} onChange={handleChange}></textarea>
    </div>
    <div className="preview-wrap" >
      <div className="preview-header">
        <p>Previewer</p>
        <button onClick={handleClick}><i className="fa fa-arrows-alt" aria-hidden="true"></i></button>
      </div>
      <div id="preview"></div>
    </div>
    </>
  )
}

export default App
