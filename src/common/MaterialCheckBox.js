import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const MaterialCheckBox = ({
  options,
  handleCheckBoxChange,
  radioGroupName
}) => {
  return (
    <>
      <FormControl component="fieldset">
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            name={radioGroupName}
            control={
              <Checkbox
                checked={option.isSelected}
                onChange={handleCheckBoxChange}
                value={option.value}
              />
            }
            label={option.label}
          />
        ))}
      </FormControl>
    </>
  );
};

export default MaterialCheckBox;
MaterialCheckBox.propTypes = {
  options: PropTypes.array,
  handleCheckBoxChange: PropTypes.func,
  radioGroupName: PropTypes.string
};
