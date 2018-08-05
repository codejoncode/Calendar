import React from 'react';
import {Form, Input, FormGroup} from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 10px;
`;
const Label = styled.label`
    font-size: 1vw;
`;
const AddTaskHeader = styled.h1`
    font-size: 1vw;
    font-weight: bold;
`;

class AddTaskForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render () {
        const date = this.props.date +",";

        return (
            <FormContainer>
                <Form onSubmit = {this.props.handleSubmit}>
                    <AddTaskHeader>Add Task for {this.props.month} {this.props.date ? date :null} {this.props.year} </AddTaskHeader>
                    <br/>
                    <FormGroup>
                        <Label>Title</Label>
                        <br/>
                        <Input onChange = {this.props.handleChange} type="textarea" name="titleText" id="titleText" value = {this.props.titleValue}/>
                        <br/>
                    </FormGroup>
                    <FormGroup>
                    <Label>Description</Label>
                    <br/>
                    <Input onChange = {this.props.handleChange} type="textarea" name="descriptionText" id="descriptionText" value = {this.props.descriptionValue} />
                    </FormGroup>
                    <br/>
                    <button onClick = {() => this.props.handleClick(this.props.titleValue, this.props.descriptionValue)}>Add Task</button>
                </Form>
            </FormContainer>

        );
    }
}

export default AddTaskForm;