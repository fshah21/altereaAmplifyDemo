import React, { Component } from 'react';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.clickFunction = this.clickFunction.bind(this);
    }

    clickFunction() {
        console.log("In click function");
        const apiName = 'apihello';
        const path = '/hello'; 
        const myInit = { // OPTIONAL
            headers: {}, // OPTIONAL
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {  // OPTIONAL
            name: 'param',
        },
    };

    API
    .get(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response);
    });
}

    render() {
        return (
            <div>
                <button onClick={this.clickFunction}>Click</button>
            </div>
        );
    }
}