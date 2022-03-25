import TabsItem from '../tabs-item/tabs-item';
import {CITIES} from '../../const';

type TabsProps = {
  activeCity: string;
}

function Tabs({activeCity}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <TabsItem
              className="locations__item"
              cityName={city}
              key={city}
              activeCity={activeCity}
            />),
          )}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
