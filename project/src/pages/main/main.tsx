import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import MainEmpty from '../../components/main-empty/main-empty';
import MainCities from '../../components/main-cities/main-cities';
import Loader from '../../components/loader/loader';
import {selectOffers, selectOffersStatus} from '../../store/offers-process/selectors';
import {FetchStatus} from '../../const';

function Main(): JSX.Element {
  const currentOffers = useAppSelector(selectOffers);
  const status = useAppSelector(selectOffersStatus);

  const isError = status === FetchStatus.Failed;

  if ([FetchStatus.Idle, FetchStatus.Loading].includes(status)) {
    return (
      <Loader />
    );
  }


  return (
    <div className="page page--gray page--main">
      <Header />
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      {currentOffers.length === 0
        ? <MainEmpty requestError={isError} />
        : <MainCities cityOffers={currentOffers} />}
    </div>
  );
}

export default Main;
