import {SortTypes} from '../../const/general';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {setSort} from '../../store/action';

type SortProps = {
  activeSort: string;
}

function Sort({activeSort}: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const sortClickHandler = () => setIsOpen(!isOpen);

  const dispatch = useAppDispatch();

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={sortClickHandler}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        {Object.values(SortTypes).map((sortType) => (
          <li
            className={`places__option ${sortType === activeSort && 'places__option--active'}`}
            tabIndex={0}
            key={sortType}
            onClick={() => {
              sortClickHandler();
              dispatch(setSort(sortType));
            }}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
