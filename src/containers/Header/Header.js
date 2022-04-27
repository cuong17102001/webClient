import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import {languages} from "../../utils"

class Header extends Component {
    handleChangeLanguage = (language)=>{
        
    }
    render() {
        const { processLogout , userInfo } = this.props;
        console.log(userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className='header-right'>
                    <div className='welcome'>Xin chào {userInfo && userInfo.lastName ? ","+userInfo.lastName+"!" : "!"}</div>
                    <div className='language'>
                        <span className='language-vi'onClick={() => this.handleChangeLanguage(languages.VI)}>VI</span>
                        <span className='language-en'onClick={() => this.handleChangeLanguage(languages.EN)}>EN</span>
                    </div>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

               
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo:state.user.userInfo ,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
