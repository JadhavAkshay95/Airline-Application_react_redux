import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({
  name,
  label,
  handleChange,
  placeholder,
  value,
  required
}) => {
  const wraperClass = 'form-group'
  return (
    <div className={wraperClass} style={{ textAlign: 'initial' }}>
      <label htmlFor={name}>{label}</label>
      {required ? <label htmlFor={name}>*</label> : null}

      <div className="field">
        <input
          type="text"
          placeholder={placeholder}
          value={value || ''}
          name={name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  )
}

export default TextInput
TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool
}
