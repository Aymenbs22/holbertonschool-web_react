import './App.css';
import { getFullYear,getFooterCopy } from './utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
    <React.Fragment>
    <Notifications />
    <div className="App">
    <Header />
    <div className="App-body">
    {isLoggedIn ? (
        <CourseList />
      ) : (
        <Login />
      )}
    </div>
    <div className="App-footer">
    <Footer />
    </div>
    </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


export default App;
