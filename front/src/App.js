import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Pages/home/Home";
import SignIn from "./Pages/singin/SignIn";
import User from "./Pages/user/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
