import React from 'react';
import HtmlElement from '../HtmlElement/HtmlElement';
import { shallow } from 'enzyme';

describe('HTML component', () => {
    it('renders without crashing', () => {
        shallow(<HtmlElement />);
      });
});