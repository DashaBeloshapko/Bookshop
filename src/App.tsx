import './App.css';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { SignUp, SignUpActivation } from './components/SignUp';
import { ResetPassword, SignIn } from './components/SignIn';
import { Books } from './components/Books/Books';
import { Footer } from './components/Footer';
import { BigBook } from './components/Books';
import { Cart } from './components/Cart';
import { SearchResults } from './components/SearchResults';

// vosyz@mailto.plus
// qwe159asd357

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'>
          <Route path='sign-up' element={<SignUp />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='activate/:uid/:token' element={<SignUpActivation></SignUpActivation>} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='books'>
            <Route index element={<Books />} />
            <Route path=":isbn13"
              element={<BigBook />} />
            <Route path='search-results' element={<SearchResults></SearchResults>} />
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

