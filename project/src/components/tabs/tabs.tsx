import TabsItem from '../tabs-item/tabs-item';
import {CITIES} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectCity} from '../../store/app-process/selectors';
import {changeCity} from '../../store/app-process/app-process';

function Tabs(): JSX.Element {
  const activeCity = useAppSelector(selectCity);

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <TabsItem
              className="locations__item"
              cityName={city}
              activeCity={activeCity}
              onCityClick={() => dispatch(changeCity(city))}
              key={city}
            />),
          )}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
