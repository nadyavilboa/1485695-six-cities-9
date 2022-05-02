import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCity} from '../../store/action';

type TabsItemProps = {
  className: string;
  cityName: string;
}

function TabsItem({className, cityName}: TabsItemProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
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
