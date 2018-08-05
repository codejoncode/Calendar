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
                        <Label for ="titleText">Title</Label>
                        <br/>
                        <Input type="textarea" name="text" id="titleText" />
                        <br/>
                    </FormGroup>
                    <FormGroup>
                    <Label for = "descriptionText">Description</Label>
                    <br/>
                    <Input type="textarea" name="text" id="descriptionText" />
                    </FormGroup>
                    <br/>
                    <button>Add Task</button>
                </Form>
            </FormContainer>
            
        );
    }
}

export default AddTaskForm;