import Header from './components/Header';
import TableList from './components/TableList';
import './App.css';

import FormContext from './context/FormContext';
import ThemeContext from './context/ThemeContext';
import { useContext, useState } from 'react';

function App() {

  const { items } = useContext(FormContext);
  const { darkMode } = useContext(ThemeContext);
  const { themes } = useContext(ThemeContext);

  console.log(darkMode)


  return (
    <div className={`App`} style={darkMode ? themes.dark : themes.light}>
      <Header />

      {items.total &&
        <TableList />
      }
    </div>
  );
}

export default App;
