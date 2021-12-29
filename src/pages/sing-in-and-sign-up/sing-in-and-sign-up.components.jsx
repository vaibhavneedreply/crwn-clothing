import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

import './sing-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sing-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage;