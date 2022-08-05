import 'bulmaswatch/superhero/bulmaswatch.min.css'
import React from 'react';
import { createRoot } from "react-dom/client"
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {



  return (
    <div>
      <TextEditor />
    </div>
  );
};

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode><App /></React.StrictMode>
)

