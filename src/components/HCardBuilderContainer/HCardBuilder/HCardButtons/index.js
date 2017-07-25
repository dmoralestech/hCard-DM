import React from 'react';
import './index.css';

const HCardButtons = () => {
    return (
        <div>
            <div className="form-group col-xs-6">
                <div className="hcard--builder--button hcard--builder--button-upload" type="button">
                    <span>Upload Avatar </span>
                    <input className="hcard--builder--button-upload-input-avatar" type="file"/>
                </div>
            </div>
            <div className="form-group col-xs-6">
                <button className="hcard--builder--button hcard--builder--button-create" type="button">Create hCard
                </button>
            </div>
        </div>
    );
};

export default HCardButtons;
