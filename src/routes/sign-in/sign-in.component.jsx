import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing in Page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default SignIn;
