import { AnimateButton } from "../components/AnimateButton";
import { SignUpForm } from "../components/SignUpFrom";

export const SignUpPage = () => {
  return (
    <div className="signUp">
      <div className="container">
        <div className="signUp__inner">
          <button
            className="signUp__back-btn animateButton"
            onClick={() => window.history.back()}
          >
            Back
            <AnimateButton />
          </button>
          <h1 className="signUp__title">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
