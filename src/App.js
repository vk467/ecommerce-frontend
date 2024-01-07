import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
