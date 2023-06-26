import './App.css';
import {Menu} from '../src/components/Menu'
import { Final } from './components/Final';
import { Step } from './components/Step';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/' Component={Step}/>
        <Route path='/final' Component={Final}/>
      </Routes>
     
     
    </div>
  );
}

export default App;
