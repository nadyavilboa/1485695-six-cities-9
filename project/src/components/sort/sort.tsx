import {SortTypes} from '../../const';
import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {changeSort} from '../../store/app-process/app-process';

type SortProps = {
  activeSort: string | undefined;
}

function Sort({activeSort}: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => setIsOpen(!isOpen)}
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
            onClick={() => dispatch(changeSort(sortType))}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
