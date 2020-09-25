import React from 'react';
import { Table } from 'react-bootstrap';
import PassengerRow from './PassengerRow';
import * as constants from '../../../../common/constant';
import PropTypes from 'prop-types';

const PassengerTable = ({
  passengerList,
  handleEdit,
  handleChangeStatus,
  showMealModal,
  handleServices,
  currentUser
}) => {
  const inFlight = window.location.pathname.includes('in-flight');

  const tableHeader =
    currentUser.role === 'admin'
      ? constants.tableHeaderAdmin
      : inFlight
      ? constants.tableHeaderFlight
      : constants.tableHeaderCheckIn;

  return (
    <>
      <Table striped bordered hover className="passenger-table-container">
        <thead>
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {passengerList.length
            ? passengerList.map((passenger, index) => (
                <PassengerRow
                  key={index}
                  passenger={passenger}
                  handleEdit={handleEdit}
                  handleChangeStatus={handleChangeStatus}
                  showMealModal={showMealModal}
                  handleServices={handleServices}
                  currentUser={currentUser}
                />
              ))
            : null}
        </tbody>
      </Table>
      {passengerList.length === 0 && <p>No passeneger is added!</p>}
    </>
  );
};

export default PassengerTable;
PassengerTable.propTypes = {
  passengerList: PropTypes.array,
  handleEdit: PropTypes.func,
  handleChangeStatus: PropTypes.func,
  showMealModal: PropTypes.func,
  handleServices: PropTypes.func,
  currentUser: PropTypes.object
};
