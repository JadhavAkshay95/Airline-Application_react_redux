import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import MaterialRadioBox from './../../../common/MaterialRadioBox';
import './../airlinestaff.scss';
import PropTypes from 'prop-types';

const ChangeMealPrefModal = ({
  show,
  selectedPassenger,
  closeMealModal,
  handleModalSubmit,
  handleMealOptionChange
}) => {
  return (
    <>
      <Modal
        className="change-meal-modal-container"
        show={show}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>
            Meal preference for passenger
            <span className="passenger-name">
              {selectedPassenger.name.firstName}
              {selectedPassenger.name.lastName}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="meal-checkbox">
                <MaterialRadioBox
                  radioGroupName="meal"
                  options={[
                    { label: 'Veg', value: 'veg' },
                    { label: 'Non-veg', value: 'nonVeg' },
                    { label: 'Vegan', value: 'vegan' }
                  ]}
                  value={selectedPassenger.meal}
                  handleRadioChange={handleMealOptionChange}
                  type="Checkbox"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer">
            <Button
              variant="light"
              className="mr-auto"
              onClick={closeMealModal}
            >
              close
            </Button>

            <Button variant="primary" value="meal" onClick={handleModalSubmit}>
              submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ChangeMealPrefModal;
ChangeMealPrefModal.propTypes = {
  show: PropTypes.bool,
  selectedPassenger: PropTypes.object,
  closeMealModal: PropTypes.func,
  handleModalSubmit: PropTypes.func,
  handleMealOptionChange: PropTypes.func
};
