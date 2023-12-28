import { useState } from 'react'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import './App.css'

function App() {
  const [input, setInput] = useState("");
 
  const handleChange = (event) => {
    const html = marked.parse(event.target.value);
    document.getElementById('preview').innerHTML = html;
    setInput(event.target.value);    
  }
  return (
    <>
    <div className='editor-wrap'>
      <div className="editor-header">
        <p>Editor</p>
      </div>
      <textarea id="editor" cols="70" rows="10" value={input} onChange={handleChange}></textarea>
    </div>
    <div className="preview-wrap">
      <div className="preview-header">
        <p>Previewer</p>
      </div>
      <div id="preview"></div>
    </div>
    </>
  )
}

export default App
