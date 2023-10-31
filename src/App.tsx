import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { SignUpPage } from "./pages/SignUpPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
