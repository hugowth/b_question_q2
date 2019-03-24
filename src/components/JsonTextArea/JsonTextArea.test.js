import React from 'react';
import JsonTextArea from '../JsonTextArea/JsonTextArea';
import { shallow } from 'enzyme';

describe('Json Text Area component', () => {
    it('renders without crashing', () => {
        shallow(<JsonTextArea />);
    });
});
