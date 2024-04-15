import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='app'>
      <nav>
        <h2>
          <Link to='/'>MoviesCatalog</Link>
        </h2>
        <Link to='/movie/1'>Movie</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <h2>Movies Catalog</h2>
    </div>
  )
}

export default App;
