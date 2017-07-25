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
            photo: '',
        };
        this.onFieldUpdate = this.onFieldUpdate.bind(this);
    }

    onFieldUpdate(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <div>
                <HCardBuilder callback={this.onFieldUpdate}/>
                <HCardPreview hCard={this.state}/>
            </div>
        );
    }
}