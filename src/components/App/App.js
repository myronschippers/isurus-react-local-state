import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
    state = {
        typedValue: 'Typing a new way',
    }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         typedValue: 'Typing Things',
    //     };
    // }

    changeInput = (event) => {
        // const inputValue = $(this).val();
        console.log(event.target.value);
        this.setState({
            typedValue: event.target.value,
        });
    }

    clickButton = (event) => {
        this.setState({
            message: this.state.message + ' Hello React',
        });
    }

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <div>
                        <input
                            type="text"
                            placeholder="Type Here"
                            onChange={this.changeInput}
                        />
                        <button onClick={this.clickButton}>
                            Do Things
                        </button>
                    </div>

                    You Typed: {this.state.typedValue}
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }
}

export default App;
