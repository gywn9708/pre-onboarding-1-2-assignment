import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { ListContextProvider } from './context/ListContext';
import Notfound from './pages/Notfound/Notfound';

const Router = () => {
  return (
    <BrowserRouter>
      <ListContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ListContextProvider>
    </BrowserRouter>
  );
};

export default Router;
