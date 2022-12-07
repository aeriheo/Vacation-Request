import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import FindPw from './pages/FindPw';
import SetPw from './pages/SetPw';
import Main from './pages/Main';
import Request from './pages/Request';
import RequestList from './pages/RequestList';
import UseList from './pages/UseList';
import Manage from './pages/Manage';
import NewMember from './pages/NewMember';
import Permission from './pages/Permission';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<Login/>} />
        <Route exact path = '/findpw' element={<FindPw/>} />
        <Route exact path = '/setpw' element={<SetPw/>} />
        <Route exact path = '/home' element={<Main/>} />
        <Route exact path = '/request' element={<Request/>} />
        <Route exact path = '/requestlist' element={<RequestList/>} />
        <Route exact path = '/uselist' element={<UseList/>} />
        <Route exact path = '/manage' element={<Manage/>} />
        <Route exact path = '/newmember' element={<NewMember/>} />
        <Route exact path = '/permission' element={<Permission/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
