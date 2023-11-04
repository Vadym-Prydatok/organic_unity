import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearUser } from "../store/slices/userSlice";
import { Link } from "react-router-dom";

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
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__nav">
            <ul className="home__nav__list">
              <li className="home__nav__item">
                <Link to="/my-profile">My profile <span>{name}</span></Link>
              </li>
              <li className="home__nav__item">
                <button onClick={() => dispatch(clearUser())}>Go out</button>
              </li>
            </ul>
          </div>

          <h1>Here can be your content</h1>
        </div>
      </div>
      <span className="home__bg"></span>
    </div>
  );
};
