import Header from './components/Header';
import TableList from './components/TableList';
import './App.css';

import FormContext from './context/FormContext';
import ThemeContext from './context/ThemeContext';
import { useContext } from 'react';

function App() {

  const { items } = useContext(FormContext);
  const { themes } = useContext(ThemeContext);

  console.log(themes)
  console.log(items)

  return (
    <div className="App">
      <Header />

      {items.total &&
        <TableList />
      }
    </div>
  );
}

export default App;
