import { Counter} from './Feedback/Feedback';
import {LoginForm} from './learn/Learn';
import { SignUpForm } from './learn/SignUp';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

<Counter />
<LoginForm/>
<SignUpForm />




    </div>
  );
};
