type TabsItemProps = {
  className: string;
  activeCity: string;
  cityName: string;
  onCityClick: (city: string) => void;
}

function TabsItem({className, activeCity, cityName, onCityClick}: TabsItemProps): JSX.Element {

  return (
    <li className={className}>
      <a
        className={`locations__item-link tabs__item ${cityName === activeCity && 'tabs__item--active'}`}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onCityClick(cityName);
        }}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default TabsItem;
