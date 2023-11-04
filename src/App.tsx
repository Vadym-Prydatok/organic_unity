import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { SignUpPage } from "./pages/SignUpPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { Message } from "./components/Message.tsx";
import { useAppSelector } from "./store/store.ts";
import { Loader } from "./components/Loader";
import { MyProfilePage } from "./pages/MyProfilePage.tsx";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function App() {
  const { messages, isLoading } = useAppSelector((state) => state.messages);
  const location = useLocation()

  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={location.key}
          classNames={'fade'}
          timeout={300}
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/my-profile" element={<MyProfilePage />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
      {messages.length > 0 && <Message />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
