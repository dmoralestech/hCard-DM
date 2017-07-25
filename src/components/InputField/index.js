import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const InputField = ({fieldName, idName, handleUpdate}) => {
    return (
        <div className="form-group col-xs-6">
            <label className="hcard--builder--label" for={idName}>{fieldName}</label>
            <input type="text" className="form-control" id={idName} onChange={handleUpdate}/>
        </div>
    );
};
InputField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    idName: PropTypes.string.isRequired,
    handleUpdate: PropTypes.func.isRequired
};

export default InputField;
