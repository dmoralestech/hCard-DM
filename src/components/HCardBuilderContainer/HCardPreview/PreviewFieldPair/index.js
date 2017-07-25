import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const PreviewFieldPair = ({label1, text1, label2, text2}) => {
    return (
        <p className="hcard--preview-mini-bottom-row">
            <span className="hcard--preview-mini-bottom-row-label">{label1}</span>
            <span
                className="hcard--preview-mini-bottom-row-text hcard--preview-mini-bottom-row-text-filler">{text1}</span>

            <span className="hcard--preview-mini-bottom-row-label">{label2}</span>
            <span
                className="hcard--preview-mini-bottom-row-text hcard--preview-mini-bottom-row-text-filler">{text2}</span>
        </p>
    );
};
PreviewFieldPair.propTypes = {
    label1: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    label2: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired
};

export default PreviewFieldPair;