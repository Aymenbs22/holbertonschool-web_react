import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('verify it renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('img', () => {
    const wrapper = shallow(<NotificationItem type="default" and value="test" />);
    expect(wrapper.find("value"));
    expect(wrapper.find("type"));
  });

  it('h1', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find("html"));
  });
});