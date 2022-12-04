import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import FindPw from './pages/FindPw';
import SetPw from './pages/SetPw';
import Main from './pages/Main';
import Request from './pages/Request';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Login/>} />
        <Route exact path = '/findpw' element={<FindPw/>} />
        <Route exact path = '/setpw' element={<SetPw/>} />
        <Route exact path = '/home' element={<Main/>} />
        <Route exact path = '/request' element={<Request/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
