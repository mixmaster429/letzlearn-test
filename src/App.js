import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
