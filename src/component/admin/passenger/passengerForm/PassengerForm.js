import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Datepicker } from 'react-formik-ui';
import { Row, Col } from 'react-bootstrap';
import PassengerFormHeader from './PassengerFormHeader';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './passengerForm.scss';

const PassengerForm = ({
  show,
  handleFormClose,
  submitHandler,
  passenger,
  totalSeat,
  updateHandler
}) => {
  return (
    <Modal show={show} size="lg" centered className="passenger-form-container">
      <PassengerFormHeader
        passenger={passenger}
        handleFormClose={handleFormClose}
      />
      <Formik
        enableReinitialize
        initialValues={passenger}
        validate={values => {
          let errors = {
            name: { firstName: '', lastName: '' },
            seatDetails: { seatNumber: '' }
          };
          let isValid = true;
          if (!values.name.firstName) {
            isValid = false;
            errors.name['firstName'] = 'Firstname is required';
          }
          if (!values.name.lastName) {
            isValid = false;
            errors.name['lastName'] = 'lastName is required';
          }
          if (!values.seatDetails.seatNumber) {
            isValid = false;
            errors.seatDetails['seatNumber'] = 'Selection is required';
          }

          return isValid ? {} : errors;
        }}
        onSubmit={values => {
          passenger.id ? updateHandler(values) : submitHandler(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <h4 className="field-header">Name</h4>
            <hr />
            <Row key="name-info">
              <Col key="1" className="field">
                <label htmlFor="firstName">
                  First Name <span className="required-Field">*</span>
                </label>
                <Field
                  key="name.firstName"
                  name="name.firstName"
                  value={values.name.firstName}
                  className={
                    'form-control' +
                    (errors.name && touched.name
                      ? touched.name.firstName && errors.name.firstName
                        ? ' is-invalid'
                        : ''
                      : '')
                  }
                />
                <ErrorMessage
                  name="name.firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>
              <Col key="2" className="field">
                <label htmlFor="middleName">Middle Name</label>
                <Field
                  key="name.middleName"
                  value={values.name.middleName}
                  name="name.middleName"
                  className="form-control"
                />
              </Col>
              <Col key="3" className="field">
                <label htmlFor="lastName">
                  Last Name <span className="required-Field">*</span>
                </label>
                <Field
                  key="name.lastName"
                  name="name.lastName"
                  value={values.name.lastName}
                  className={
                    'form-control' +
                    (errors.name && touched.name
                      ? touched.name.lastName && errors.name.lastName
                        ? ' is-invalid'
                        : ''
                      : '')
                  }
                />
                <ErrorMessage
                  name="name.lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>
            </Row>
            <br></br>
            <Row key="birth-info">
              <Col className="field">
                <label htmlFor="dateOfBirth">Date of birth</label>
                <Datepicker
                  value={values.dateOfBirth}
                  name="dateOfBirth"
                  className={'form-control'}
                />
              </Col>
              <Col className="field">
                <label htmlFor="firstName">
                  Seat Number <span className="required-Field">*</span>
                </label>
                <Field
                  key="seatDetails.seatNumber"
                  name="seatDetails.seatNumber"
                  component="select"
                  value={values.seatDetails.seatNumber}
                  className={
                    'form-control' +
                    (errors.seatDetails && touched.seatDetails
                      ? touched.seatDetails.seatNumber &&
                        errors.seatDetails.seatNumber
                        ? ' is-invalid'
                        : ''
                      : '')
                  }
                >
                  <option>Select</option>
                  {totalSeat.map(seat => (
                    <option key={seat}>{seat}</option>
                  ))}
                </Field>
                <ErrorMessage
                  name="seatDetails.seatNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </Col>
            </Row>
            <br></br>
            <h4 className="field-header">Address</h4>
            <hr />
            <Row key="address-info">
              <Col key="4" className="field">
                <label htmlFor="societyDetails">Flat / Society / Area</label>
                <Field
                  key="address.societyDetails"
                  value={values.address.societyDetails}
                  name="address.societyDetails"
                  className="form-control"
                />
              </Col>
              <Col key="5" className="field">
                <label htmlFor="city">City</label>
                <Field
                  key="address.city"
                  name="address.city"
                  value={values.address.city}
                  className="form-control"
                />
              </Col>
            </Row>
            <br></br>
            <h4 className="field-header">Passport details</h4>
            <hr />
            <Row key="passport-info">
              <Col key="6" className="field">
                <label htmlFor="societyDetails">Passport Number</label>
                <Field
                  key="passportNumber"
                  name="passportDetails.passportNumber"
                  value={values.passportDetails.passportNumber}
                  className="form-control"
                />
              </Col>
              <Col key="7" className="field">
                <label htmlFor="citizen">Citizen</label>
                <Field
                  key="citizen"
                  name="passportDetails.citizen"
                  value={values.passportDetails.citizen}
                  className="form-control"
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col key="8"></Col>
              <Col key="9">
                <Button variant="success" type="submit">
                  {passenger.id ? 'Update' : 'Submit'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
export default PassengerForm;

PassengerForm.propTypes = {
  show: PropTypes.bool,
  handleFormClose: PropTypes.func,
  submitHandler: PropTypes.func,
  passenger: PropTypes.object,
  handleChange: PropTypes.func,
  totalSeat: PropTypes.array,
  updateHandler: PropTypes.func,
  inValidForm: PropTypes.bool,
  errors: PropTypes.object
};
