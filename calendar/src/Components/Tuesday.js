import React from 'react';
import Day from './Day.js';
// import styled from 'styled-components'


class Tuesday extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {


        return (
            <Day>{this.props.date}</Day>
            
        ); 
    }
}

export default Tuesday; 