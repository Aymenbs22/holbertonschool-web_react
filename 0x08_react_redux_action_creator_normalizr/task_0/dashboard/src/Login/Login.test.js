import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('verify it renders without crashing', () => {
    shallow(<Login />);
  });

  it('Verify that the components renders 2 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('Verify that the components renders 2 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('Verify that the components renders 2 tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.enableSubmit).toBe(false);
  });

  it('has test that verifies that button is enabled after changing the value of the two inputs', () => {
    const firstInput = screen.getByTestId('firstName-input');
    const lastInput = screen.getByTestId('lastName-input');

    expect(screen.getByTestId('App-body').closest('button')).toBeDisabled();
    fireEvent.change(firstInput, {
      target: { value: 'email' },
    });
    fireEvent.change(lastInput, {
      target: { value: 'password' },
    });
    expect(screen.getByTestId('App-body').closest('button')).not.toBeDisabled();
})

});