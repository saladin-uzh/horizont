import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ name, label, type, required, title, noBar, children }) => {
    const defaultChildren = (
        <Fragment>
            <input type={ type }
                   id={ name }
                   name={ name }
                   required={ required }
                   title={ title }/>
            { noBar ? null : <span className="bar"/> }
            <label>{ label }</label>
        </Fragment>
    );
    return (
        <div className="field-container">
            <label className="group">
                { children ? children : defaultChildren}
            </label>
        </div>
    )
};

InputField.defaultProps = {
    required: true,
    title: '',
    noBar: false,
    type: 'text'
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool,
    title: PropTypes.string,
    noBar: PropTypes.bool
};

export default InputField;