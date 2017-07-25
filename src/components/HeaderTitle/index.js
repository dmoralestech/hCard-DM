import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const HeaderTitle = ({title}) => {
    return (
        <div className="row">
            <div className="col-xs-12 hcard--builder--title">
                {title}
            </div>
        </div>
    );
};
HeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default HeaderTitle;