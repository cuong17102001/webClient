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
            password: '',
            errMessage : ''
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
        this.setState({
            errMessage : ''
        })

        try {
            let data = await handleLoginApi(this.state.username , this.state.password)
            if(data.errCode !== 0){
                this.setState({
                    errMessage : data.message
                })
            }

            if(data && data.errCode === 0){
                this.props.userLoginSuccess(data.user)
            }
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
                        <div className='col-12' style={{color : 'red'}}>
                            {this.state.errMessage}
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess : (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
