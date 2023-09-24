import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('verify it renders without crashing', () => {
    shallow(<Header />);
  });

  it('img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.logoutSection.exists()).toBe(false);
  });

  it('h1', () => {
    const mailcheck = {
      email: 'test@test.com',
    }
    const wrapper = shallow(<Header />);
    expect(wrapper.mailcheck.exists()).toBe(true);
  });
});