import {CITIES} from '../../const/general';

import cn from 'classnames';

type TabsItemProps = {
  className: string;
  cityName: string;
}

function TabsItem({className, cityName}: TabsItemProps): JSX.Element {
  return (
    <li className = {className}>
      <a className = {cn( `locations__item-link tabs__item ${cityName === CITIES[0] ? 'tabs__item--active' : ''}`)} href = "#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
