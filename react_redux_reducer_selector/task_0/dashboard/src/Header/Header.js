import { getFullYear,getFooterCopy } from './utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
  }
  })

render() ;{
  return (
      <header className="App-header">
        <img className="App-Logo" alt='' src={require('./logo.jpg')} />
        <h1>School dashboard</h1>
        {isLoggedIn && (
          <p id="logoutSection">
          Welcome <strong>{user.email}</strong> (
          <a onClick={logOut} className={css(styles.link)}>Log out</a>)
        </p>
      )}
      </header>
  );
}

Header.contextType = AppContext;

export default Header;
