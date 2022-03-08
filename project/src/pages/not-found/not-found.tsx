import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import {AppRoute} from '../../const/routing';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className = "page page--gray page--main">
      <Header />
      <section className = {styles.wrapper}>
        <h1 className = {styles.heading}>🙁 404. Page not found</h1>
        <Link to = {AppRoute.Main} className = {styles.linkMain}>
          Вернуться на главную
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
