import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { SignUp, SignUpActivation } from './components/SignUp';
import { ResetPassword, SignIn } from './components/SignIn';
import { Books } from './components/Books/Books';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'>
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='activate/:uid/:token' element={<SignUpActivation></SignUpActivation>} />
          <Route path='books'>
            <Route index element={<Books />} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

