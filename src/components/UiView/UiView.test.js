import React from 'react';
import UiView from '../UiView/UiView';
import { shallow } from 'enzyme';

describe('Ui View component', () => {
    it('renders without crashing', () => {
        shallow(<UiView />);
      });
});