import React from 'react';
import Link from './Link.jsx';
import {FilterTypes} from '../../constants.js';
import './style.css';

const Filter = () => {
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}> {FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED}</Link>
    </p>
  );
};

export default Filter;
