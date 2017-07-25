import React, {Component} from 'react';
import './App.css'

class App extends Component {
    render() {
        return (
            <main>
                <div className="container-fluid hcard">
                    <div className="row">
                        <HCardBuilder />
                    </div>
                </div>
            </main>
        );
    }
}

class HCardBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            givename: '',
            surname: '',
            email: '',
            phone: '',
            houseName: '',
            street: '',
            suburb: '',
            stateName: '',
            postCode: '',
            country: '',
            photo: '',
        };
    }

    onFieldUpdate(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="sr-only">hCard Builder</h2>

                    <div className="col-md-6 hcard--builder">
                        <HeaderTitle title="hCard Builder"/>

                        <div className="hcard--builder-section">
                            <HCardBuilderSubHeader subHeader="personal details"/>
                            <InputFieldPair firstFieldId="givenName" firstFieldName="Given Name" secondFieldId="surname"
                                            secondFieldName="surname" handleUpdate={this.onFieldUpdate.bind(this)}/>
                            <InputFieldPair firstFieldId="email" firstFieldName="email" secondFieldId="phone"
                                            secondFieldName="phone" handleUpdate={this.onFieldUpdate.bind(this)}/>
                        </div>

                        <div className="hcard--builder-section">
                            <HCardBuilderSubHeader subHeader="address"/>
                            <InputFieldPair firstFieldId="houseName" firstFieldName="HOUSE NAME OR #"
                                            secondFieldId="street"
                                            secondFieldName="street" handleUpdate={this.onFieldUpdate.bind(this)}/>
                            <InputFieldPair firstFieldId="suburb" firstFieldName="suburb" secondFieldId="stateName"
                                            secondFieldName="state" handleUpdate={this.onFieldUpdate.bind(this)}/>
                            <InputFieldPair firstFieldId="postCode" firstFieldName="postCode" secondFieldId="country"
                                            secondFieldName="country" handleUpdate={this.onFieldUpdate.bind(this)}/>
                        </div>

                        <div className="hcard--builder-section">
                            <HCardButtons/>
                        </div>

                        <div className="hcard--builder-section">
                        </div>

                    </div>

                </div>

                <HCardPreview hCard={this.state}/>

            </div>
        );
    }
}

const HeaderTitle = ({title}) => {
    return (
        <div className="row">
            <div className="col-xs-12 hcard--builder--title">
                {title}
            </div>
        </div>
    );
}
const InputFieldPair = ({firstFieldId, firstFieldName, secondFieldId, secondFieldName, handleUpdate}) => {
    return (
        <div className="row">
            <InputField idName={firstFieldId} fieldName={firstFieldName} handleUpdate={handleUpdate}/>
            <InputField idName={secondFieldId} fieldName={secondFieldName} handleUpdate={handleUpdate}/>
        </div>
    );

}

const InputField = ({fieldName, idName, handleUpdate}) => {
    return (
        <div className="form-group col-xs-6">
            <label className="hcard--builder--label" for={idName}>{fieldName}</label>
            <input type="text" className="form-control" id={idName} onChange={handleUpdate}/>
        </div>
    );
}

const HCardBuilderSubHeader = ({subHeader}) => {
    return (
        <div className="row">
            <div className="col-xs-12 hcard--builder--subtitle">
                {subHeader}
            </div>
        </div>
    );
}

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
}

const HCardPreview = ({hCard}) => {

    const addressLine1 = hCard.houseName + ' ' + hCard.street;
    const addressLine2 = (hCard.stateName) ? hCard.suburb + ", " + hCard.stateName : hCard.suburb;

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
                        <PreviewHeader givenName={hCard.givenName} surname={hCard.surname} />
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
}

const PreviewHeader = ({givenName, surname}) => {
    return (
        <div className="hcard--preview-mini-top-avatar-heading">
            <h2 className="hcard--preview-mini-top-name-heading">{givenName} {surname}</h2>
            <img className="hcard--preview-mini-top-avatar-image" id="image" src="./placeholder.jpg" alt=""/>
        </div>
    );
}

const PreviewField = ({label, text}) => {
    return (
        <p className="hcard--preview-mini-bottom-row">
            <span className="hcard--preview-mini-bottom-row-label">{label}</span>
            <span className="hcard--preview-mini-bottom-row-text">{text}</span>
        </p>
    );
}

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
}

export default App;
