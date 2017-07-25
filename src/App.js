import React, {Component} from 'react';
import HCardBuilderContainer from './components/HCardBuilderContainer'
import './App.css'

//TODO: put commments
class App extends Component {
    render() {
        return (
            <main>
                <h1 className="sr-only">hCard</h1>
                <div className="container-fluid hcard">
                    <div className="row">
                        <HCardBuilderContainer />
                    </div>
                </div>
            </main>
        );
    }
}

// class HCardBuilderContainer extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             givename: '',
//             surname: '',
//             email: '',
//             phone: '',
//             houseName: '',
//             street: '',
//             suburb: '',
//             stateName: '',
//             postCode: '',
//             country: '',
//             photo: '',
//         };
//         this.onFieldUpdate = this.onFieldUpdate.bind(this);
//     }
//
//     onFieldUpdate(event) {
//         this.setState({[event.target.id]: event.target.value});
//     }
//
//     render() {
//         return (
//             <div>
//                 <HCardBuilder callback={this.onFieldUpdate}/>
//                 <HCardPreview hCard={this.state}/>
//             </div>
//         );
//     }
// }

// const HCardBuilder = ({callback}) => {
//     return (
//         <div>
//             <h2 className="sr-only">hCard Builder</h2>
//
//             <div className="col-md-6 hcard--builder">
//                 <HeaderTitle title="hCard Builder"/>
//
//                 <div className="hcard--builder-section">
//                     <HCardBuilderSubHeader subHeader="personal details"/>
//                     <InputFieldPair firstFieldId="givenName" firstFieldName="Given Name" secondFieldId="surname"
//                                     secondFieldName="surname" handleUpdate={callback}/>
//                     <InputFieldPair firstFieldId="email" firstFieldName="email" secondFieldId="phone"
//                                     secondFieldName="phone" handleUpdate={callback}/>
//                 </div>
//
//                 <div className="hcard--builder-section">
//                     <HCardBuilderSubHeader subHeader="address"/>
//                     <InputFieldPair firstFieldId="houseName" firstFieldName="HOUSE NAME OR #"
//                                     secondFieldId="street"
//                                     secondFieldName="street" handleUpdate={callback}/>
//                     <InputFieldPair firstFieldId="suburb" firstFieldName="suburb" secondFieldId="stateName"
//                                     secondFieldName="state" handleUpdate={callback}/>
//                     <InputFieldPair firstFieldId="postCode" firstFieldName="postCode" secondFieldId="country"
//                                     secondFieldName="country" handleUpdate={callback}/>
//                 </div>
//
//                 <div className="hcard--builder-section">
//                     <HCardButtons/>
//                 </div>
//
//                 <div className="hcard--builder-section">
//                 </div>
//
//             </div>
//
//         </div>
//     );
// }

// const HeaderTitle = ({title}) => {
//     return (
//         <div className="row">
//             <div className="col-xs-12 hcard--builder--title">
//                 {title}
//             </div>
//         </div>
//     );
// };
// HeaderTitle.propTypes = {
//     title: PropTypes.string.isRequired
// }

// const InputFieldPair = ({firstFieldId, firstFieldName, secondFieldId, secondFieldName, handleUpdate}) => {
//     return (
//         <div className="row">
//             <InputField idName={firstFieldId} fieldName={firstFieldName} handleUpdate={handleUpdate}/>
//             <InputField idName={secondFieldId} fieldName={secondFieldName} handleUpdate={handleUpdate}/>
//         </div>
//     );
// };
// InputFieldPair.propTypes = {
//     firstFieldId: PropTypes.string.isRequired,
//     firstFieldName: PropTypes.string.isRequired,
//     secondFieldId: PropTypes.string.isRequired,
//     secondFieldName: PropTypes.string.isRequired,
//     handleUpdate: PropTypes.func.isRequired
// };

// const InputField = ({fieldName, idName, handleUpdate}) => {
//     return (
//         <div className="form-group col-xs-6">
//             <label className="hcard--builder--label" for={idName}>{fieldName}</label>
//             <input type="text" className="form-control" id={idName} onChange={handleUpdate}/>
//         </div>
//     );
// };
// InputField.propTypes = {
//     fieldName: PropTypes.string.isRequired,
//     idName: PropTypes.string.isRequired,
//     handleUpdate: PropTypes.func.isRequired
// };


// const HCardBuilderSubHeader = ({subHeader}) => {
//     return (
//         <div className="row">
//             <div className="col-xs-12 hcard--builder--subtitle">
//                 {subHeader}
//             </div>
//         </div>
//     );
// };
// HCardBuilderSubHeader.propTypes = {
//     subHeader: PropTypes.string.isRequired
// };


// const HCardButtons = () => {
//     return (
//         <div>
//             <div className="form-group col-xs-6">
//                 <div className="hcard--builder--button hcard--builder--button-upload" type="button">
//                     <span>Upload Avatar </span>
//                     <input className="hcard--builder--button-upload-input-avatar" type="file"/>
//                 </div>
//             </div>
//             <div className="form-group col-xs-6">
//                 <button className="hcard--builder--button hcard--builder--button-create" type="button">Create hCard
//                 </button>
//             </div>
//         </div>
//     );
// };

// const HCardPreview = ({hCard}) => {
//
//     const addressLine1 = hCard.houseName + ' ' + hCard.street;
//     const addressLine2 = (hCard.stateName) ? hCard.suburb + ", " + hCard.stateName : hCard.suburb;
//
//     return (
//         <section>
//             <h2 className="sr-only">HCARD PREVIEW</h2>
//             <div className="col-md-6 hcard--preview container-fixed">
//                 <div className="row">
//                     <div className="col-xs-12 hcard--preview--subtitle">
//                         hCard Preview
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xs-12 hcard--preview-mini">
//                         <PreviewHeader givenName={hCard.givenName} surname={hCard.surname}/>
//                         <div className="hcard--preview-mini-bottom">
//                             <PreviewField label="EMAIL" text={hCard.email}/>
//                             <PreviewField label="PHONE" text={hCard.phone}/>
//                             <PreviewField label="ADDRESS" text={addressLine1}/>
//                             <PreviewField label="" text={addressLine2}/>
//                             <PreviewFieldPair label1="POST CODE" text1={hCard.postCode}
//                                               label2="COUNTRY" text2={hCard.country}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// HCardPreview.propTypes = {
//     hCard: PropTypes.object.isRequired
// };

// const PreviewHeader = ({givenName, surname}) => {
//     return (
//         <div className="hcard--preview-mini-top-avatar-heading">
//             <h2 className="hcard--preview-mini-top-name-heading">{givenName} {surname}</h2>
//             <img className="hcard--preview-mini-top-avatar-image" id="image" src="./placeholder.jpg" alt=""/>
//         </div>
//     );
// };
// PreviewHeader.propTypes = {
//     givenName: PropTypes.string.isRequired,
//     surname: PropTypes.string.isRequired
// };

// const PreviewField = ({label, text}) => {
//     return (
//         <p className="hcard--preview-mini-bottom-row">
//             <span className="hcard--preview-mini-bottom-row-label">{label}</span>
//             <span className="hcard--preview-mini-bottom-row-text">{text}</span>
//         </p>
//     );
// };
// PreviewField.propTypes = {
//     label: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
// };

// const PreviewFieldPair = ({label1, text1, label2, text2}) => {
//     return (
//         <p className="hcard--preview-mini-bottom-row">
//             <span className="hcard--preview-mini-bottom-row-label">{label1}</span>
//             <span
//                 className="hcard--preview-mini-bottom-row-text hcard--preview-mini-bottom-row-text-filler">{text1}</span>
//
//             <span className="hcard--preview-mini-bottom-row-label">{label2}</span>
//             <span
//                 className="hcard--preview-mini-bottom-row-text hcard--preview-mini-bottom-row-text-filler">{text2}</span>
//         </p>
//     );
// };
// PreviewFieldPair.propTypes = {
//     label1: PropTypes.string.isRequired,
//     text1: PropTypes.string.isRequired,
//     label2: PropTypes.string.isRequired,
//     text2: PropTypes.string.isRequired
// };

export default App;
