import { Routes, Route } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage/index';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ListPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
