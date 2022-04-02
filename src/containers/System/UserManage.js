import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import {getAllUsers} from "../../services/userService";
import "./UserManage.scss"
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers : []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers : response.users
            })
        }
    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className='title text-center'>Manage users</div>
                <div className='user-table'>
                    <div className='container'>
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
                                            <button className='btn-edit'><i class="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'><i class="fas fa-trash"></i></button>
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
