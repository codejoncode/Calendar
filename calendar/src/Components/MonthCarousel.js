import React from 'react';
import styled from 'styled-components'; 
import PropTypes from 'prop-types';

const MonthHeader = styled.h1 `
    width: 800px; 
    max-width: 100%; 
    font-size: 5vw;
    text-align: center;
    border: 1px solid black;
    padding: 20px;

`;


class MonthCarousel extends React.Component {
    constructor(props){
        super(props); 
        this.state = {

        } 
    }

    render() {


        return (

            <MonthHeader>{this.props.month}</MonthHeader> 
        ); 
    }


}

MonthCarousel.propTypes = {
    month: PropTypes.string
  }

export default MonthCarousel; 