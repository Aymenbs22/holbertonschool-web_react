import { shallow } from 'enzyme';
import Notification from "./Notifications";

describe('<MyComponent />', () => {
  it('renders app', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.exists);
  });

  it('renders App-header', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('NotificationItem')).to.have.lengthOf(3);
  });

  it('renders App-body', () => {
    const { getByText } = within(screen.getByTestId('Notifications'))
    expect(getByText('Here is the list of notifications')).toBeInTheDocument()
  });

  it('renders App-footer', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find("App-footer")).toEqual("App-footer");
  });
});