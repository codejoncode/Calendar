import React from 'react';
import {Form, Input, FormGroup, Label} from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 10px;
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
                    <Label for = "descriptionText">Description</Label>
                    <br/>
                    <Input type="textarea" name="text" id="descriptionText" />
                    </FormGroup>
                </Form>
            </FormContainer>
        );
    }
}

export default AddTaskForm;