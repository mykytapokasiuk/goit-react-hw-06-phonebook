import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contactsFilter.filter);
  const dispatch = useDispatch();
  const filterNameId = nanoid();

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <div className={css.filter}>
        <label htmlFor={filterNameId}>Find contacts by name</label>
        <input
          type="text"
          value={filter}
          name="name"
          placeholder="Enter name"
          id={filterNameId}
          onChange={onChangeFilter}
          required
        />
      </div>
    </div>
  );
};

export default Filter;
