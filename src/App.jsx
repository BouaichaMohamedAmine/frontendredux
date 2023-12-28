import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'typeface-roboto';
import './App.css';

import Editarticle from "./components/admin/articles/Editarticle";
import Insertarticle from "./components/admin/articles/Insertarticle";
import Listarticles from "./components/client/Listarticles";


import Listcategories from "./components/admin/categories/Listcategories";

import Listscategories from "./components/admin/scategories/Listscategories";


import Cart from "./components/client/Cart";
import ProductsAppAdmin from "./components/admin/articles/ProductsAppAdmin";



import { ToastContainer } from 'react-toastify';

import StripePayment from './components/client/StripePayment';
import Login from "./components/admin/Login";
import Menu from "./components/admin/Menu";
import Register from "./components/admin/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Logout from"./components/admin/Logout";



function App() {

  return (

    <>

      <ToastContainer />
      <Router>

        <Routes>

          <Route path="" element={<Login />} />
          <Route path="/admin/Menu" element={<Menu />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoutes/>}>   
            <Route path="/articles/add" element={<Insertarticle />} />
            <Route path="/article/edit/:id" element={<Editarticle />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/articlesadmin" element={<ProductsAppAdmin />} />
            <Route path="/categories" element={<Listcategories />} />
            <Route path="/scategories" element={<Listscategories />} />
            <Route path='/pay/:total' element={<StripePayment />} />
            <Route path="/logout" element={<Logout/>} />

          </Route>
          <Route path="/articlesclient" element={<Listarticles />} />

        </Routes>
      </Router>

    </>

  )
}

export default App
