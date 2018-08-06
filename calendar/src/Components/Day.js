import React from 'react';

import styled from 'styled-components'; 
import PropTypes from 'prop-types';

const DayStyled = styled.div`
  background-color: #cdcdcd;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  input {
    width: 20px;
  }
`;


class Day extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            
            //tasks: this.props.tasks[0]
           
        }
    }

    // UNSAFE_componentWillUpdate(){
    //     if(this.props.tasks){
    //         this.setState({tasks: this.props.tasks});
    //     }
         
    // }

    render () {
        //console.log(this.props.tasks);
        const date = this.props.data;


        return (

            <DayStyled onClick = {() => this.props.onClick(this.props.tasks, this.props.data+1 ? date: null)}>{this.props.data}</DayStyled>
        );
    }
}

Day.propTypes = {
    data: PropTypes.string,
    onClick: PropTypes.func,
    date: PropTypes.string,
    weekDay: PropTypes.string
  }

export default Day; 