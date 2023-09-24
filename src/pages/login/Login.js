import LoginForm from '../../components/loginForms/LoginForm';
import './login.scss';

const Login = () => {
  return (
    <div className="startPage">
      <div className="startImage">
        <h1 className="font5">Rabbit Records</h1>
        <span>
          <a href="https://unsplash.com/@shichijiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Wei Fukuyama
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/Rr9K_FR-0-w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
      <div className="startForm font1">
        <h1 className="font2">Log in</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
