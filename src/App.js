import React, {Component} from 'react';
import HCardBuilderContainer from './components/HCardBuilderContainer'
import './App.css'

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

export default App;
