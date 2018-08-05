import React from 'react';
import Day from './Day';

// import styled from 'styled-components'

class Wednesday extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props.date);

        return (

            <Day>{this.props.date}</Day>
            
        ); 
    }
}

export default Wednesday;