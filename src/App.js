import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Product from './components/home/Product';
import Work from './components/view/Test';
import Competition from './components/competition/Competition';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/test" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;