import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { htmlFor, label, type, name, value, onChange, span } = this.props;

    return (
      <label htmlFor={ htmlFor } className="form-group">
        {label}
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
        <span>{span}</span>
      </label>
    );
  }
}

FormInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  span: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  span: '',
};

export default FormInput;
