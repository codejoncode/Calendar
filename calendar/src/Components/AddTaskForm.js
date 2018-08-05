import React from 'react';
import {Form, Input, FormGroup} from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 10px;
`;
const Label = styled.label`
    font-size: 1vw;
`;

class AddTaskForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render () {


        return (
            <FormContainer>
                <Form>
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
                    <button onClick = {this.props.handleClick}>Add Task</button>
                </Form>
            </FormContainer>

        );
    }
}

export default AddTaskForm;