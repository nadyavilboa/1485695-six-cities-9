import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import {AppRoute} from '../../const/routing';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <div className="not-found">
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFound;
