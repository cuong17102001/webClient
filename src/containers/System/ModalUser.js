import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import {Button , Modal , ModalHeader , ModalBody ,ModalFooter ,Form, FormGroup, Label, Input, FormText} from "reactstrap";
class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            firstname:'',
            lastname:'',
            address:'',
            phonenumber:'',
            gender: 0,
            role: 1
        }
    }

    componentDidMount() {
    }

    toggle = () =>{
        this.props.toggleModalUser();
    }


    handleOnChangeInput = (event , id)=>{
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
       
    }

    checkValidAddUser = () =>{
        let isValid = true;
        let array = ['email', 'password' , 'fisrtname', 'lastname' , 'address' , 'phonenumber']
        for (let index = 0; index < array.length; index++) {
            if(this.state[array[index]] === ''){
                isValid = false;
                break;
            }
            
        }
        return isValid;
    }

    handleAddNewUser = () =>{
       let valid = this.checkValidAddUser()
       if (valid === true) {
           this.props.createNewUser(this.state)
       }
    }
    render() {
        return (
                <Modal 
                isOpen={this.props.isOpen} 
                toggle={() =>{this.toggle()}}
                size="lg"
                
                >
                    <ModalHeader toggle={() =>{this.toggle()}}>
                    Modal title
                    </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <FormGroup className='col-6'>
                            <Label for="exampleEmail">Email</Label>
                            <Input onChange={(event) =>{this.handleOnChangeInput(event , 'email')}} type="email" name="email" id="exampleEmail" placeholder="Your email" />
                            </FormGroup>
                            <FormGroup className='col-6'>
                            <Label for="examplePassword">Password</Label>
                            <Input onChange={(event) =>{this.handleOnChangeInput(event , 'password')}} type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                        </div>
                        <div className='row'>
                            <FormGroup className='col-6'>
                            <Label for="exampleEmail">First Name</Label>
                            <Input onChange={(event) =>{this.handleOnChangeInput(event , 'firstname')}} type="text" name="firstName" id="exampleEmail" placeholder="First Name" />
                            </FormGroup>
                            <FormGroup className='col-6'>
                            <Label for="examplePassword">Last Name</Label>
                            <Input onChange={(event) =>{this.handleOnChangeInput(event , 'lastname')}} type="text" name="lastName" id="examplePassword" placeholder="Last Name" />
                            </FormGroup>
                        </div>
                        <FormGroup className='col-12'>
                            <Label for="examplePassword">Address</Label>
                            <Input onChange={(event) =>{this.handleOnChangeInput(event , 'address')}} type="text" name="address" id="examplePassword" placeholder="Address" />
                        </FormGroup>
                        <FormGroup>
                        
                            <div className='row'>
                                <FormGroup className='col-5'>
                                <Label for="exampleEmail">Phone Number</Label>
                                <Input onChange={(event) =>{this.handleOnChangeInput(event , 'phonenumber')}} type="text" name="phonenumber" id="exampleEmail" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup className='col-3'>
                                <Label for="exampleSelect">Sex</Label>
                                    <Input onChange={(event) =>{this.handleOnChangeInput(event , 'gender')}} type="select" name="gender" id="exampleSelect">
                                        <option value={0}>Male</option>
                                        <option value={1}>Female</option>
                                        
                                    </Input>
                                </FormGroup>
                                <FormGroup className='col-4'>
                                <Label for="exampleSelect">Role</Label>
                                    <Input onChange={(event) =>{this.handleOnChangeInput(event , 'role')}} type="select" name="role" id="exampleSelect">
                                        <option value={1}>Docter</option>
                                        <option value={2}>Patient</option>
                                    </Input>
                                </FormGroup>
                            </div>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                    <Button
                        color="primary"
                        type='submit'
                        onClick={() =>{this.handleAddNewUser()}}
                    >
                        Add new
                    </Button>
                    <Button onClick={() =>{this.toggle()}}>
                        Cancel
                    </Button>
                    </ModalFooter>
                </Modal>
         
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
                

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



