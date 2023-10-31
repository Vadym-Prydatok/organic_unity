import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearUser } from "../store/slices/userSlice";

export const Home = () => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  // const navigate = useNavigate();

  console.log(isAuth);
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{`Hello ${name}!`}</p>
      <button onClick={() => dispatch(clearUser())}>Go out</button>
    </div>
  );
};
