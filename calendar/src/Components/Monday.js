import React from 'react';
import Day from './Day.js';
import styled from 'styled-components'

class Monday extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        

        return (

            <Day>{this.props.date ? this.props.date : "   "}</Day>
        ); 
    }
}

export default Monday; 