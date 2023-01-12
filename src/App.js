import './App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/info' element={ <Info /> } />
      </Routes>
    </div>
  );
}

export default App;
