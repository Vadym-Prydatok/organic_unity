import { useEffect, useState } from "react";
import { SignInForm } from "../components/SignInForm";
import classNames from "classnames";

export const LoginPage: React.FC = () => {
  const [activeBg, setActiveBg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeBg === 3) {
        setActiveBg(1);
      } else {
        setActiveBg(activeBg + 1);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [activeBg]);
  return (
    <div className="login">
      <section className="mobile">
        <div className="container">
          <div className="mobile__inner">
            <header className="header">
              <div className="header__inner">
                <div className="header__logo">
                  <span>OrganicUnity</span>
                </div>
                <div className="header__cart">
                  <a href="#" className="header__link">
                    <img src="img/svg/cart.svg" alt="cart" />
                  </a>
                </div>
              </div>
            </header>

            <div className="content">
              <div className="content__inner">
                <h1 className="content__title">
                  Welcom back to <span>OrganicUnity</span>
                </h1>
                <SignInForm />
              </div>
            </div>

            <div className="terms">
              <div>
                Copyright © 2020 <a href="#">OrganicUnity</a> All rights
                reserved.
              </div>
              <div>Terms & Conditions</div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames("desktop", `activeBg${activeBg}`)}>
        <div className="container">
          <div className="desktop__inner">
            <div className="desktop__content">
              <h1>“Save the Planet...Buy Organic”</h1>
              <p>― Nancy Philips</p>
            </div>

            <div className="desktop__control">
              <ul>
                <li
                  className={classNames({ active: activeBg === 1 })}
                  onClick={() => setActiveBg(1)}
                ></li>
                <li
                  className={classNames({ active: activeBg === 2 })}
                  onClick={() => setActiveBg(2)}
                ></li>
                <li
                  className={classNames({ active: activeBg === 3 })}
                  onClick={() => setActiveBg(3)}
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
