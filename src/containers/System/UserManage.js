import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import {getAllUsers , addNewUserService} from "../../services/userService";
import "./UserManage.scss"

import ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers : [],
            isOpenModalUser : false
        }
    }

    async componentDidMount() {
       await this.getAllUserReact()
    }

    getAllUserReact = async() =>{
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers : response.users
            })
        }
    }

    handleAddNewUser = ()=>{
        this.setState({
            isOpenModalUser : true
        })
    }
    
    toggleModalUser = () =>{
        this.setState({
            isOpenModalUser : !this.state.isOpenModalUser
        })
    }

    createNewUser = async(data)=>{
        try {
            let res = await addNewUserService(data);
            if(res && res.errCode !== 0){
                alert(res.message);
            }else{
                await this.getAllUserReact()
                this.setState({
                    isOpenModalUser : false
                })
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        
    }
    
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleModalUser={this.toggleModalUser}
                    createNewUser={this.createNewUser}
                />
                <div className='title text-center'>Manage users</div>
                <div className='user-table'>
                    <div className='container'>
                        <div className='col-12'>
                            <button 
                            className='btn btn-primary px-3'
                            onClick={() => this.handleAddNewUser()}
                            ><i className="fas fa-plus"></i> Add new user</button>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {arrUsers && arrUsers.map((item, index) =>{
                                return (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                            
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
