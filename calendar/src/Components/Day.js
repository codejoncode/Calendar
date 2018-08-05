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
           tasks: {
                id: Date.now(),
                date: [this.props.data, this.props.weekDay],
                task: 'hello',
                completed: false
                }

        }
    }

    componentDidMount(){
        const date = [this.props.data, this.props.weekDay]
        this.setState({tasks: {id:Date.now(), date: [this.props.data, this.props.weekDay], task: ''}});
    }

    render () {
        // console.log("check it out")
        // console.log(this.props.data)
        // console.log(this.props.weekDay);
        // console.log(this.state.tasks)
        // console.log("done");
        return (

            <DayStyled onClick = {() => this.props.onClick(this.state.tasks,this.props.dateArray)}>{this.props.data}</DayStyled>
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