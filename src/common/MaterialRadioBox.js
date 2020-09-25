import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'

const MaterialRadioBox = ({
  radioGroupName,
  options,
  value,
  handleRadioChange
}) => {
  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label={radioGroupName}
          name={radioGroupName}
          value={value}
          onChange={handleRadioChange}
        >
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default MaterialRadioBox
MaterialRadioBox.propTypes = {
  radioGroupName: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  handleRadioChange: PropTypes.func
}
