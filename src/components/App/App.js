import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

// DO NOT DO THIS
// class Link extends Component {
//     render() {
//         return (
//             <a href="https://www.google.com">GOOGLE</a>
//         );
//     }
// }

class App extends Component {
    state = {
        typedValue: 'Typing a new way',
        message: 'Something Clever',
        hide: false,
        listMe: ['Shanice', 'Macy', 'James', 'Luke'],
        objectPlease: {
            name: 'Bobby Donuts',
            occupation: 'cewl',
        } 
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
            hide: !this.state.hide,
        });
    }

    render() {
        let messageElement = <p>{this.state.message}</p>;

        if (this.state.hide) {
            messageElement = null;
        }

        return (
            <div>
                <Header />

                <div className="container">
                    {/* <Link /> */}
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
                    {messageElement}
                    {this.state.listMe}
                    {JSON.stringify(this.state.objectPlease)}
                </div>
            </div>
        );
    }
}

export default App;
