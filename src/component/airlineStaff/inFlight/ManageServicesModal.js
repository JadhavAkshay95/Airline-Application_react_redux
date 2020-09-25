import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './../airlinestaff.scss';
import MaterialCheckBox from './../../../common/MaterialCheckBox';
import PropTypes from 'prop-types';

const ManageServicesModal = ({
  show,
  closeManageServiceModal,
  selectedPassenger,
  handleModalSubmit,
  handleCheckBoxChange,
  handleAnsilaryCheckBoxChange,
  flightFacility,
  flightShoppingItems
}) => {
  const inFlight = window.location.pathname.includes('in-flight');
  const [facilityList, setFacilityList] = useState(flightFacility);
  const [shoppingItems, setShoppingItems] = useState(flightShoppingItems);

  const checkAnsilary = service => {
    return selectedPassenger.ancillaryServices.includes(service);
  };

  const checkItem = item => {
    return selectedPassenger.shoppingItems.includes(item);
  };

  useEffect(() => {
    const list = facilityList.map(facility => {
      facility.isSelected = checkAnsilary(facility.value);
      return facility;
    });
    setFacilityList(list);
  }, [selectedPassenger.ancillaryServices.length]);

  useEffect(() => {
    const list = shoppingItems.map(item => {
      item.isSelected = checkItem(item.value);
      return item;
    });
    setShoppingItems(list);
  }, [selectedPassenger.shoppingItems.length]);

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
          <Modal.Title>
            Manage ancillary services for passenger
            <span className="passenger-name">
              {selectedPassenger.name.firstName}
              {selectedPassenger.name.lastName}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              {facilityList.length && (
                <Col className="service-checkbox">
                  <h5>Ancilary Services</h5>
                  <MaterialCheckBox
                    radioGroupName="ansillary"
                    handleCheckBoxChange={handleCheckBoxChange}
                    options={facilityList}
                  />
                </Col>
              )}
              {shoppingItems.length && (
                <Col className="service-checkbox">
                  <h5>Shopping Items</h5>
                  <MaterialCheckBox
                    radioGroupName="shopping"
                    handleCheckBoxChange={handleCheckBoxChange}
                    options={shoppingItems}
                  />
                </Col>
              )}
            </Row>
            <hr></hr>
            {!inFlight && (
              <>
                <>
                  <Row>
                    <Col className="service-checkbox1">
                      <h5>Extra service</h5>
                      <MaterialCheckBox
                        radioGroupName="ansillary"
                        handleCheckBoxChange={handleAnsilaryCheckBoxChange}
                        options={[
                          {
                            label: 'Infant',
                            value: 'infant',
                            isSelected: selectedPassenger.passengerStatus.infant
                          },
                          {
                            label: 'Wheel-chair',
                            value: 'wheelChair',
                            isSelected:
                              selectedPassenger.passengerStatus.wheelChair
                          }
                        ]}
                      />
                    </Col>
                  </Row>
                </>
              </>
            )}
          </div>
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
export default ManageServicesModal;
ManageServicesModal.propTypes = {
  show: PropTypes.bool,
  closeManageServiceModal: PropTypes.func,
  selectedPassenger: PropTypes.object,
  handleModalSubmit: PropTypes.func,
  handleCheckBoxChange: PropTypes.func,
  handleAnsilaryCheckBoxChange: PropTypes.func,
  flightShoppingItems: PropTypes.array,
  flightFacility: PropTypes.array
};
