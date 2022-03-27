import {FormEvent, useRef, useState} from 'react';
import Logo from '../../components/logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import styles from './login.module.css';

const REGEX_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REGEX_PASSWORD = /(?=.*?[A-Za-z])(?=.*?[0-9])/;

const EMAIL_ERROR = 'E-mail должен содержать символы "@" и ".", разделяемые буквами и/или цифрами, например email23@mail.ru';
const PASSWORD_ERROR = 'Пароль должен содержать как минимум одну цифру и одну букву';

function Login(): JSX.Element {
  const [validateStatus, setValidateStatus] = useState({
    email: 'empty',
    password: 'empty',
  });

  const {city} = useAppSelector((state) => state);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleloginChange = () => {
    if (loginRef.current !== null) {
      const checkValidateEmail = loginRef.current.value.match(REGEX_EMAIL);
      if (checkValidateEmail !== null) {
        setValidateStatus({...validateStatus, email: 'correct'});
      } else {
        setValidateStatus({...validateStatus, email: 'uncorrect'});
      }
    }
    return validateStatus;
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const checkValidatePassword = passwordRef.current.value.match(REGEX_PASSWORD);
      if (checkValidatePassword !== null) {
        setValidateStatus({...validateStatus, password: 'correct'});
      } else {
        setValidateStatus({...validateStatus, password: 'uncorrect'});
      }
    }
    return validateStatus;
  };

  function onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null &&
      passwordRef.current !== null &&
      validateStatus === {
        email: 'correct',
        password: 'correct',
      }) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo className="header__logo-link" />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className={`login__input form__input ${validateStatus.email === 'uncorrect' && styles.errorInput}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleloginChange}
                />
                <p className={`'error' ${validateStatus.email === 'uncorrect' && styles.errorText}`}>
                  {validateStatus.email === 'uncorrect' && EMAIL_ERROR}
                </p>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className={`login__input form__input ${validateStatus.password === 'uncorrect' && styles.errorInput}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handlePasswordChange}
                />
                <p className={`'error' ${validateStatus.password === 'uncorrect' && styles.errorText}`}>
                  {validateStatus.password === 'uncorrect' && PASSWORD_ERROR}
                </p>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a
                className="locations__item-link"
                href="#"
                onClick={(evt) => evt.preventDefault()}
              >
                <span>{city}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
