import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HCardBuilderSubHeader = ({subHeader}) => {
    return (
        <div className="row">
            <div className="col-xs-12 hcard--builder--subtitle">
                {subHeader}
            </div>
        </div>
    );
};
HCardBuilderSubHeader.propTypes = {
    subHeader: PropTypes.string.isRequired
};

export default HCardBuilderSubHeader;