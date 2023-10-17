import { getFullYear,getFooterCopy } from './utils';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    margin: '60px'
}
})

const styles2 = StyleSheet.create({
  footer: {
    width: '100%'
}
})


class App extends React.Component {
 

  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: logOut,
    };
  }


  handleDisplayDrawer = () => {
    const { displayDrawer } = this.state;
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    const { displayDrawer } = this.state;
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      value: {
        ...this.state.value,
        user: {
          email,
          password,
          isLoggedIn: true,
          listNotifications: this.listNotifications
        }
      }
    });
  }

  markNotificationAsRead = (id) => {
    const newlist = this.listNotifications.filter(notification => notification.id !== this.notificationId);
    setListNotifications(newlist);
  }

  logOut() {
    this.setState({ user: '' })
  }

 
  render() {
      return (
          <AppContext.Provider value={value}>
          <React.Fragment>
          <Notifications listNotifications={listNotifications} markNotificationAsRead={this.markNotificationAsRead}/>
          <div className="App">
          <Header />
          <div className={css(styles.body)}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={this.listCourses}/>
            </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">

            </BodySection>
          </div>
          <div className={css(styles2.footer)}>
          <Footer />
          </div>
          </div>
          </React.Fragment>
          </AppContext.Provider>
        );
  }
}


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

export default App;
