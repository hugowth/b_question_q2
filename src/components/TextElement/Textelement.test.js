import React from 'react';
import Textelement from '../Textelement/Textelement';
import { shallow } from 'enzyme';

describe('Text component', () => {
    it('renders without crashing', () => {
        shallow(<Textelement />);
      });
});