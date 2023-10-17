import './footer.css';
import { getFullYear,getFooterCopy } from './utils';
import AppContext from './AppContext';

function Footer() {
  return (
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {isLoggedIn ? (
            <AppContext.Consumer>
              <p>
              <a>Contact us</a>
              </p>
            </AppContext.Consumer>
            ) : (
              <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            )}
      </footer>
  );
}

export default Footer;
