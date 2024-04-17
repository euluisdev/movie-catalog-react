import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

import './App.css';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <h2>Movies Catalog</h2>
      <Outlet />
    </div>
  )
}

export default App;
