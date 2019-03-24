global.___loader = {
  enqueue: jest.fn(),
}
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });