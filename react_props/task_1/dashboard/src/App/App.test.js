import { shallow } from 'enzyme';
import App from './task_0/dashboard/src/App/App';
import Header from '../Header/Header';
import Notifications from './Notifications/Notifications';
import Footer from '../Footer/Footer';


describe('<MyComponent />', () => {
  it('renders app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-header")).toEqual("App-header");
  });

  it('renders App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App")).toEqual("App");
  });

  it('renders App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-body")).toEqual("App-body");
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("App-footer")).toEqual("App-footer");
  });
});