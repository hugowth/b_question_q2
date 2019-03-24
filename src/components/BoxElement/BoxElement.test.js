import React from 'react';
import BoxElement from '../BoxElement/BoxElement';
import { shallow } from 'enzyme';

describe('Box component', () => {
    it('renders without crashing', () => {
        shallow(<BoxElement />);
      });
});