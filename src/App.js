import Header from './components/Header';
import TableList from './components/TableList';
import './App.css';

import FormContext from './context/FormContext';
import { useContext } from 'react';

function App() {

  const { items } = useContext(FormContext)

  return (
    <div className="App">
      <Header />
      {items.length > 0 &&
        <TableList />
      }
    </div>
  );
}

export default App;
