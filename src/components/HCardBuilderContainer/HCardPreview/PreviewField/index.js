import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const PreviewField = ({label, text}) => {
    return (
        <p className="hcard--preview-mini-bottom-row">
            <span className="hcard--preview-mini-bottom-row-label">{label}</span>
            <span className="hcard--preview-mini-bottom-row-text">{text}</span>
        </p>
    );
};
PreviewField.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PreviewField;