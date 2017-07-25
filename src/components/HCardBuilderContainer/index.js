import React, {Component} from 'react';
import HCardBuilder from './HCardBuilder';
import HCardPreview from './HCardPreview';

export default class HCardBuilderContainer extends Component {
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
            photo: './placeholder.jpg',
        };
        this.onFieldUpdate = this.onFieldUpdate.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }

    onFieldUpdate(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    selectFile(event) {
        let file = event.target.files[0];

        if (window.URL) {
            this.setState({photo: window.URL.createObjectURL(file)});
        }
    }

    render() {
        return (
            <div>
                <HCardBuilder callback={this.onFieldUpdate} selectFile={this.selectFile}/>
                <HCardPreview hCard={this.state}/>
            </div>
        );
    }
}