import {
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addMessages, setIsloading } from "../store/slices/messageSlice";
import { setUser } from "../store/slices/userSlice";
import { useState } from "react";
import classNames from "classnames";
import { AnimateButton } from "../components/AnimateButton";

export const MyProfilePage = () => {
  const { name, email } = useAppSelector((state) => state.user);
  const [newName, setNewName] = useState("");
  const [isEditing, setEditing] = useState(false);

  const dispatch = useAppDispatch();

  const startChange = () => {
    setEditing(true);

    if (name) {
      setNewName(name);
    }
  };

  const handleUpdate = (name: string) => {
    const auth = getAuth();
    dispatch(setIsloading(true));

    const user = auth.currentUser;

    if (user) {
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

          dispatch(
            addMessages(`Success, your new name is ${user.displayName}!`)
          );
        })
        .catch((err) => {
          dispatch(addMessages(err.message));
        })
        .finally(() => {
          dispatch(setIsloading(false));
          setEditing(false);
        });
    } else {
      dispatch(addMessages("User not found"));
      dispatch(setIsloading(false));
      setEditing(false);
    }
  };

  return (
    <div className="myProfile">
      <div className="container">
        <div className="myProfile__inner">
          <nav className="myProfile__nav">
            <button
              className="signUp__back-btn animateButton"
              onClick={() => window.history.back()}
            >
              Back
              <AnimateButton />
            </button>
            <h1>My Profile</h1>
          </nav>

          <div className={classNames("myProfile__info", { hide: isEditing })}>
            <dl className="myProfile__info-list">
              <dd className="myProfile__info-item">Your Name</dd>
              <dt className="myProfile__info-item">{name}</dt>

              <dd className="myProfile__info-item">Your Email</dd>
              <dt className="myProfile__info-item">{email}</dt>
            </dl>

            <button className="myProfile__button" onClick={startChange}>
              Change name
            </button>
          </div>

          <div
            className={classNames("myProfile__update", { hide: !isEditing })}
          >
            <input
              type="text"
              name="name"
              placeholder="Put your new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <div className="myProfile__update-control">
              <button
                className="myProfile__button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
              <button
                className="myProfile__button"
                onClick={() => handleUpdate(newName)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
