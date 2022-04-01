import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChangeUsername = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event)=>{
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async ()=>{
        try {
            await handleLoginApi(this.state.username , this.state.password);
        } catch (error) {
            console.log(error)
        }
        
    }

    render() {
        
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>LOGIN</div>
                        <div className='col-12 form-group'>
                            <label>Username</label>
                            <input  onChange={(event) => this.handleOnChangeUsername(event)}
                            value={this.state.username} 
                            placeholder='Enter your username' 
                            type='text' className='form-control input-login'></input>
                        </div>
                        <div className='col-12 form-group'>
                            <label>Password</label>
                            <input onChange={(event) => this.handleOnChangePassword(event)}
                             value={this.state.password} placeholder='Enter your password' type='password' className='form-control input-login'></input>
                        </div>
                        <div className='col-12'>
                            <button 
                            onClick={()=> {this.handleLogin()}}
                            className='btn-login'>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className=''>Or Login With</span>
                        </div>
                        <div className='col-12'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
