import {useAppDispatch} from '../../hooks';
import {AppRoute} from '../../const/routing';
import {Link} from 'react-router-dom';
import {setCity} from '../../store/action';

type TabsItemProps = {
  className: string;
  cityName: string;
}

function TabsItem({className, cityName}: TabsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className={className}>
      <Link
        className="locations__item-link tabs__item"
        to={AppRoute.Main}
        onClick={() => dispatch(setCity(cityName))}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

export default TabsItem;
