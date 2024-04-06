import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Workers from './components/Workers/Workers';
import ProductsForm from './components/Products/ProductsForm/ProductsForm'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/test_gh_pages_/products" element={<Products/>} />
        <Route path="/test_gh_pages_/workers" element={<Workers/>} />
        <Route path="/test_gh_pages_/products_form" element={<ProductsForm/>} />
        <Route path="/test_gh_pages_/products_form/:id" element={<ProductsForm/>} />  {/* Благодаря :id Реакт понимает, что число после products_form/ - это id */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
