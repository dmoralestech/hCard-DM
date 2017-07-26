import React from 'react';
import HCardButtons from './HCardButtons'
import InputFieldPair from '../../InputFieldPair'
import HCardBuilderSubHeader from './HCardBuilderSubHeader'
import HeaderTitle from '../../HeaderTitle'
import PropTypes from 'prop-types';
import './index.css';

const HCardBuilder = ({callback, selectFile}) => {
    return (
        <section>
            <div>
                <h2 className="sr-only">hCard Builder</h2>

                <div className="col-md-6 hcard--builder">
                    <HeaderTitle title="hCard Builder"/>

                    <div className="hcard--builder-section">
                        <HCardBuilderSubHeader subHeader="personal details"/>
                        <InputFieldPair firstFieldId="givenName" firstFieldName="Given Name" secondFieldId="surname"
                                        secondFieldName="surname" handleUpdate={callback}/>
                        <InputFieldPair firstFieldId="email" firstFieldName="email" secondFieldId="phone"
                                        secondFieldName="phone" handleUpdate={callback}/>
                    </div>

                    <div className="hcard--builder-section">
                        <HCardBuilderSubHeader subHeader="address"/>
                        <InputFieldPair firstFieldId="houseName" firstFieldName="HOUSE NAME OR #"
                                        secondFieldId="street"
                                        secondFieldName="street" handleUpdate={callback}/>
                        <InputFieldPair firstFieldId="suburb" firstFieldName="suburb" secondFieldId="stateName"
                                        secondFieldName="state" handleUpdate={callback}/>
                        <InputFieldPair firstFieldId="postCode" firstFieldName="postCode" secondFieldId="country"
                                        secondFieldName="country" handleUpdate={callback}/>
                    </div>

                    <div className="hcard--builder-section">
                        <HCardButtons selectFile={selectFile}/>
                    </div>

                    <div className="hcard--builder-section">
                    </div>

                </div>

            </div>
        </section>
    );
}

HCardBuilder.propTypes = {
    callback: PropTypes.func.isRequired,
    selectFile: PropTypes.func.isRequired
};

export default HCardBuilder;