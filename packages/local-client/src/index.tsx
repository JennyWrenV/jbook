import 'bulmaswatch/superhero/bulmaswatch.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react';
import { createRoot } from "react-dom/client"

import CellList from './components/cell-list';
import { Provider } from 'react-redux';
import { store } from './state'

const App = () => {



  return (
    <Provider store={store}>
      <div>

        <CellList />
      </div>
    </Provider>
  );
};

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode><App /></React.StrictMode>
)

