import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../InputField';

const InputFieldPair = ({firstFieldId, firstFieldName, secondFieldId, secondFieldName, handleUpdate}) => {
    return (
        <div className="row">
            <InputField idName={firstFieldId} fieldName={firstFieldName} handleUpdate={handleUpdate}/>
            <InputField idName={secondFieldId} fieldName={secondFieldName} handleUpdate={handleUpdate}/>
        </div>
    );
};
InputFieldPair.propTypes = {
    firstFieldId: PropTypes.string.isRequired,
    firstFieldName: PropTypes.string.isRequired,
    secondFieldId: PropTypes.string.isRequired,
    secondFieldName: PropTypes.string.isRequired,
    handleUpdate: PropTypes.func.isRequired
};

export default InputFieldPair;