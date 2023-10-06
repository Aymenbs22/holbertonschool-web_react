import { getFullYear,getFooterCopy } from './utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
  }
  })

const [email] = useState('');
const [password] = useState('');
const [enableSubmit] = useState(false);

const handleLoginSubmit = (e) => {
  e.preventDefault();
  this.props.logIn(this.state.email, this.state.password);
};

function handleChangeEmail(e) {
  setState({ email: e.target.value });
  enableSubmit(newEmail.length > 0 && password.length > 0);
}

function handleChangePassword(e) {
  setState({ password: e.target.value });
  enableSubmit(email.length > 0 && newPassword.length > 0);
}

function login() {
  return (
      <body className="App-body">
      <p>Login to access the full dashboard</p>
      <label>Email: </label>
      <form>
      <input type='email' value={email}></input>
      <label>Password: </label>
      <input type='password' value={password}></input>
      </form>
      <input type="submit" onSubmit={this.handleLoginSubmit} disabled={!enableSubmit}></input>
      </body>
  );
}

export default login;
