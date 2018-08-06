import React from 'react';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

const TaskContainer = styled.div`
    width: 370px;
    margin-right: 15px;
    margin-left: 15px;
    max-width: 100%; 
    h1,p{
      font-size: 1vh;
      font-size: 1vw;
      font-weight: bold;
    }
`;

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <TaskContainer>
                <h1>Task for {this.props.weekDay} {this.props.month} {this.props.date} {this.props.year}</h1>
                <br/>
                <br/>
                <h1>Title: {this.props.title}</h1>
                <h1>Description: {this.props.description}</h1>
                <br/>
            </TaskContainer> 

        ); 
    }
}

Task.propTypes = {
    
    task: PropTypes.string
  }

export default Task; 