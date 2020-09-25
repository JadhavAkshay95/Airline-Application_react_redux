import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as PassengerAction from '../../../redux/actions/passengerAction';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './passenger.scss';
import PropTypes from 'prop-types';

export const PassengerFilter = ({ currentUser, filterByFormField }) => {
  const inFlight = window.location.pathname.includes('in-flight');

  return (
    <>
      <Container className="passenger-filter-container">
        <Row>
          <FormGroup row>
            {currentUser && currentUser.role === 'admin' && (
              <>
                <FormControlLabel
                  control={<Checkbox value="passport" />}
                  label="Filter by passport"
                  onChange={filterByFormField}
                />
                <FormControlLabel
                  control={<Checkbox value="address" color="primary" />}
                  label="Filter by address"
                  onChange={filterByFormField}
                />
                <FormControlLabel
                  control={<Checkbox value="dob" color="primary" />}
                  label="Filter by date of birth"
                  onChange={filterByFormField}
                />
              </>
            )}

            {currentUser && currentUser.role === 'staff' && !inFlight && (
              <>
                <FormControlLabel
                  control={<Checkbox value="checkeIn" color="primary" />}
                  label="Filter by Check in "
                  onChange={filterByFormField}
                />
                <FormControlLabel
                  control={<Checkbox value="unCheck" color="primary" />}
                  label="Filter by Uncheck in"
                  onChange={filterByFormField}
                />
                <FormControlLabel
                  control={<Checkbox value="wheelChair" color="primary" />}
                  label="Filter by wheel chair"
                  onChange={filterByFormField}
                />
                <FormControlLabel
                  control={<Checkbox value="infant" color="primary" />}
                  label="Filter by infant"
                  onChange={filterByFormField}
                />
              </>
            )}
          </FormGroup>
        </Row>
      </Container>
    </>
  );
};

const mapDispatchToProps = {
  filterPassenger: PassengerAction.filterPassenger
};
export default connect(null, mapDispatchToProps)(PassengerFilter);
PassengerFilter.propTypes = {
  currentUser: PropTypes.object,
  filterByFormField: PropTypes.func
};
