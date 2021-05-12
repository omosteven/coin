import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';

import { PageTransition } from './AppStyle';

import { HomePage } from './pages/home';
import { AboutUsPage } from './pages/aboutUs';
import { ServicesPage } from './pages/services';
import { ContactUsPage } from './pages/contactUs';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <PageTransition>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/*" component={HomePage}>
              <Redirect to="/home" component={HomePage} />
            </Route> */}
            <Route exact path="/aboutus/" component={AboutUsPage} />
            <Route exact path="/services/" component={ServicesPage} />
            <Route exact path="/contactus/" component={ContactUsPage} />

          </Switch>
        </Router>
      </PageTransition>
    </div>
  );
};

export default App;
