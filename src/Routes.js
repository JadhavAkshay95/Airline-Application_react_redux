import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const AirlineStaffHomePage = React.lazy(() =>
  import('./component/airlineStaff/AirlineStaffHomePage')
);

const FlightDetails = lazy(() =>
  import('./component/airlineStaff/checkIn/flightDetails/FlightDetails')
);
const Login = lazy(() => import('./component/login/Login'));
const PassengerList = lazy(() =>
  import('./component/admin/passenger/PassengerList')
);

const FlightList = lazy(() =>
  import('./component/airlineStaff/checkIn/flightDetails/FlightList')
);

const Header = lazy(() => import('./component/common/Header'));
const history = createBrowserHistory();

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <Header history={history}></Header>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route
            exact
            path="/staff-home"
            component={AirlineStaffHomePage}
          ></Route>
          <Route
            exact
            path="/staff-home/in-flight/flight-list/:id"
            component={FlightDetails}
          ></Route>
          <Route
            exact
            path="/staff-home/check-in/flight-list/:id"
            component={FlightDetails}
          ></Route>
          <Route
            exact
            path="/admin/flight-list/:id"
            component={FlightDetails}
          ></Route>
          <Route exact path="/admin/flight-list" component={FlightList}></Route>
          <Route
            exact
            path="/admin/flight-list/:id/passengerList"
            component={PassengerList}
          ></Route>
          <Route
            exact
            path="/staff-home/check-in/flight-list"
            component={FlightList}
          ></Route>
          <Route
            exact
            path="/staff-home/in-flight/flight-list"
            component={FlightList}
          ></Route>
          <Route
            exact
            path="/staff-home/in-flight/flight-list/:id/passengerList"
            component={PassengerList}
          ></Route>
          <Route
            exact
            path="/staff-home/check-in/flight-list/:id/passengerList"
            component={PassengerList}
          ></Route>
        </Switch>
      </Router>{' '}
    </Suspense>
  );
};

export default Routes;
