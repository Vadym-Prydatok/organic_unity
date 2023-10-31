import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../store/store";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (
    e: React.MouseEvent<HTMLButtonElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );

        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div className="SignInForm">
      <div className="SignInForm__inner">
        <h1 className="SignInForm__title">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="SignInForm__setting">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <a href="#">Forget Password?</a>
          </div>

          <button
            className="SignInForm__button animateButton"
            onClick={(e) => handleLogin(e, email, password)}
          >
            Login
          </button>
        </form>

        <div className="SignInForm__info">
          Don’t have an account? <a href="/register">Get Started</a>
        </div>
      </div>
    </div>
  );
};
