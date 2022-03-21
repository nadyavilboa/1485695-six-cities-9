import {useAppDispatch} from '../../hooks';
import {setCity} from '../../store/action';

type TabsItemProps = {
  className: string;
  cityName: string;
  activeCity: string;
}

function TabsItem({className, cityName, activeCity}: TabsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className={className}>
      <a
        className={`locations__item-link tabs__item ${cityName === activeCity && 'tabs__item--active'}`}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(setCity(cityName));
        }}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
