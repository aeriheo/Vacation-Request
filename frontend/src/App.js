import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import FindPw from './pages/FindPw';
import SetPw from './pages/SetPw';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Login/>} />
        <Route exact path = '/findpw' element={<FindPw/>} />
        <Route exact path = '/setpw' element={<SetPw/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
