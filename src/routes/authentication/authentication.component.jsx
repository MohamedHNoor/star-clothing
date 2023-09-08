import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form copy/sign-in-form.component";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   createUserDocumentFromAuth(user);
  // };

  return (
    <div>
      <h1>Sing in Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
