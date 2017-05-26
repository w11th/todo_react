import React from 'react';
import Filter from '../../../src/filter/views/Filter.jsx';
import Link from '../../../src/filter/views/Link.jsx';
import {FilterTypes} from '../../../src/constants.js';
import {shallow} from 'enzyme';

describe('filters', () => {
  it('should render three link', () => {
    const wrapper = shallow(<Filter />);

    expect(wrapper.contains(<Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>)).toBe(true);
  });
});
