import cn from 'classnames';
import {FormEvent, useRef, useState} from 'react';
import Logo from '../../components/logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {selectCity} from '../../store/app-process/selectors';

import styles from './login.module.css';

const REGEX_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REGEX_PASSWORD = /(?=.*?[A-Za-z])(?=.*?[0-9])/;

const EMAIL_ERROR = 'E-mail должен содержать символы "@" и ".", разделяемые буквами и/или цифрами, например email23@mail.ru';
const PASSWORD_ERROR = 'Пароль должен содержать как минимум одну цифру и одну букву';

enum ValidateValues {
  Unknown = 'Unknown',
  Correct = 'Correct',
  Uncorrect = 'Uncorrect',
}

function Login(): JSX.Element {
  const activeCity = useAppSelector(selectCity);
  const [validateStatus, setValidateStatus] = useState({
    email: ValidateValues.Unknown,
    password: ValidateValues.Unknown,
  });

  const isCorrect = () => Object.values(validateStatus)
    .every((el) => el === ValidateValues.Correct);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleloginChange = () => {
    if (loginRef.current !== null) {
      const isValid = REGEX_EMAIL.test(loginRef.current.value);
      isValid ?
        setValidateStatus({...validateStatus, email: ValidateValues.Correct}) :
        setValidateStatus({...validateStatus, email: ValidateValues.Uncorrect});
    }
    return validateStatus;
  };

  const handlePasswordChange = () => {
    if (passwordRef.current !== null) {
      const isValid = REGEX_PASSWORD.test(passwordRef.current.value);
      isValid ?
        setValidateStatus({...validateStatus, password: ValidateValues.Correct}) :
        setValidateStatus({...validateStatus, password: ValidateValues.Uncorrect});
    }
    return validateStatus;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null &&
      passwordRef.current !== null &&
      isCorrect) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
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
                  className={cn('login__input', 'form__input', { [styles.errorInput]:  validateStatus.email === ValidateValues.Uncorrect })}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleloginChange}
                />
                {validateStatus.email === ValidateValues.Uncorrect && (
                  <p className={styles.errorText}>
                    {EMAIL_ERROR}
                  </p>
                )}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className={cn('login__input', 'form__input', { [styles.errorInput]: validateStatus.password === ValidateValues.Uncorrect })}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handlePasswordChange}
                />
                {validateStatus.password === ValidateValues.Uncorrect && (
                  <p className={styles.errorText}>
                    {PASSWORD_ERROR}
                  </p>
                )}
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
                <span>{activeCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
