import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './../../../../component/airlineStaff/airlinestaff.scss';
import MaterialCheckBox from './../../../../common/MaterialCheckBox';
import PropTypes from 'prop-types';

const AddServicesModal = ({
  show,
  closeManageServiceModal,
  handleModalSubmit,
  flight
}) => {
  const [facility, setFacility] = useState(flight.facility);
  const [shoppingItems, setShoppingItems] = useState(flight.shoppingItems);

  const handleCheckBoxChange = event => {
    let cloneArray = [...facility];
    let item = cloneArray.find(item => item.value === event.target.value);
    item.isSelected = event.target.checked;
    cloneArray[cloneArray.indexOf(item)] = item;
    setFacility(cloneArray);
  };

  const handleShoppingItemChange = event => {
    let cloneArray = [...shoppingItems];
    let item = cloneArray.find(item => item.value === event.target.value);
    item.isSelected = event.target.checked;
    cloneArray[cloneArray.indexOf(item)] = item;
    setShoppingItems(cloneArray);
  };

  return (
    <>
      <Modal
        className="change-services-modal-container"
        show={show}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>Manage flight services</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: '1rem' }}>
          <Row>
            <Col>
              {facility.length && (
                <div>
                  <br />
                  <h5>Ancilary Services</h5>
                  <MaterialCheckBox
                    radioGroupName="ansillary"
                    handleCheckBoxChange={handleCheckBoxChange}
                    options={facility}
                  />
                </div>
              )}
            </Col>
            <Col>
              {shoppingItems.length && (
                <div>
                  <br />
                  <h5>Shopping items</h5>

                  <MaterialCheckBox
                    id="shoppingItems"
                    radioGroupName="ansillary"
                    handleCheckBoxChange={handleShoppingItemChange}
                    options={shoppingItems}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={closeManageServiceModal}>
            close
          </Button>
          <Button
            variant="primary"
            value="ancillary"
            onClick={handleModalSubmit}
          >
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddServicesModal;
AddServicesModal.propTypes = {
  show: PropTypes.bool,
  flight: PropTypes.object,
  closeManageServiceModal: PropTypes.func,
  handleModalSubmit: PropTypes.func
};
