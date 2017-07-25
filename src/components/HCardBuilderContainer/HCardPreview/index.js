import React from 'react';
import PreviewField from './PreviewField';
import PreviewHeader from './PreviewHeader';
import PreviewFieldPair from './PreviewFieldPair'
import PropTypes from 'prop-types';
import './index.css';

const HCardPreview = ({hCard}) => {

    const addressLine1 = hCard.houseName + ' ' + hCard.street;

    let addressLine2;
    if (!hCard.stateName) {
        addressLine2 = hCard.suburb;
    } else if (!hCard.suburb) {
        addressLine2 = hCard.stateName;
    } else {
        addressLine2 = hCard.suburb + ", " + hCard.stateName
    }

    return (
        <section>
            <h2 className="sr-only">HCARD PREVIEW</h2>
            <div className="col-md-6 hcard--preview container-fixed">
                <div className="row">
                    <div className="col-xs-12 hcard--preview--subtitle">
                        hCard Preview
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 hcard--preview-mini">
                        <PreviewHeader givenName={hCard.givenName} surname={hCard.surname}/>
                        <div className="hcard--preview-mini-bottom">
                            <PreviewField label="EMAIL" text={hCard.email}/>
                            <PreviewField label="PHONE" text={hCard.phone}/>
                            <PreviewField label="ADDRESS" text={addressLine1}/>
                            <PreviewField label="" text={addressLine2}/>
                            <PreviewFieldPair label1="POST CODE" text1={hCard.postCode}
                                              label2="COUNTRY" text2={hCard.country}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HCardPreview.propTypes = {
    hCard: PropTypes.object.isRequired
};

export default HCardPreview;