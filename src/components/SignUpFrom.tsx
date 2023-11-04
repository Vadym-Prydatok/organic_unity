import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router";
import { addMessages, setIsloading } from "../store/slices/messageSlice";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    dispatch(setIsloading(true));

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: name })
          .then(() => {
            dispatch(
              setUser({
                name: user.displayName,
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
              })
            );

            dispatch(addMessages(`Success, Hello ${user.displayName}!`));
            navigate("/");
          })
          .catch((err) => {
            dispatch(addMessages(err.message));
          });
      })
      .catch((err) => {
        dispatch(addMessages(err.message));
      })
      .finally(() => dispatch(setIsloading(false)));
  };

  return (
    <div className="signUp__form">
      <input
        type="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button
        className="signUp__button"
        onClick={() => handleLogin(email, password)}
      >
        Sign Up
      </button>
    </div>
  );
};
