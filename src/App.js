import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
