import { Routes, Route } from 'react-router-dom';

import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/admin"  element={<Admin />}/>
      </Routes>    
    </BrowserRouter>
    
  );
}

export default App;
