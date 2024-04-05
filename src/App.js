import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
