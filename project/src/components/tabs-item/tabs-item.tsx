import {DEFAULT_CITY} from '../../const/general';

type TabsItemProps = {
  className: string;
  cityName: string;
}

function TabsItem({className, cityName}: TabsItemProps): JSX.Element {
  return (
    <li className={className}>
      <a className={`locations__item-link tabs__item ${cityName === DEFAULT_CITY ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
