type TabsItemProps = {
  className: string;
  cityName: string;
}

function TabsItem({className, cityName}: TabsItemProps): JSX.Element {
  return (
    <li className={className}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
