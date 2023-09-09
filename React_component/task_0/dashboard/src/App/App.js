import './App.css';
import { getFullYear,getFooterCopy } from './utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

class App extends React.Component {
 

  constructor(props) {
    super(props);
  }
  
 
  render() {
      return (
          <React.Fragment>
          <Notifications listNotifications={listNotifications}/>
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
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

export default App;
