import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const PreviewHeader = ({givenName, surname, photo}) => {
    return (
        <div className="hcard--preview-mini-top-avatar-heading">
            <h2 className="hcard--preview-mini-top-name-heading">{givenName} {surname}</h2>
            <img className="hcard--preview-mini-top-avatar-image" id="image" src={photo} alt=""/>
        </div>
    );
};
PreviewHeader.propTypes = {
    givenName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
};

export default PreviewHeader;