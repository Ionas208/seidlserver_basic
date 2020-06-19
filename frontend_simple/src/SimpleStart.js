import React from 'react';

class SimpleStart extends React.Component{
    constructor(props){
        super(props);
        this.start = this.start.bind(this);
    }
    
    render(){
        return <button onClick={this.start}>Start</button>
    }

    start(){
        const requestOptions = {
            method: 'POST',
        };
        fetch('http://localhost:5000/api/start', requestOptions);
    }
}

export default SimpleStart;