import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import './HeaderHome.scss';
import { FormattedMessage } from 'react-intl';

class HeaderHome extends Component {

    render() {
        console.log(this.props.userInfo);
        return (
            
            <Fragment>
                <div className='home-header-container container'>
                    <div className='home-header-content row'>
                        <div className=' col-2 home-header-content-left '>
                            <div className='header-logo'></div>
                        </div>
                        <div className='col-8 home-header-content-center px-4'>
                            <div className='row'>
                                <div className='col-3 '>
                                    <span className='home-header-content-center-bold'>Chuyên Khoa</span><br/>
                                    <span>Tìm bác sĩ theo chuyên khoa</span>
                                </div>
                                <div className='col-3'>
                                    <span className='home-header-content-center-bold'>Cơ sở ý tế</span><br/>
                                    <span>Chọn bệnh viện phòng khám</span>
                                </div>
                                <div className='col-3'>
                                    <span className='home-header-content-center-bold'>Bác sĩ</span><br/>
                                    <span>Tìm bác sĩ giỏi</span>
                                </div>
                                <div className='col-3'>
                                    <span className='home-header-content-center-bold'>Gói khám</span><br/>
                                    <span>Khám tổng quát</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 home-header-content-right'>
                            <div className='row'>
                                <i class="fas fa-question-circle col-1 home-header-content-right-icon"></i>
                                <span className='col-6'>Hỗ Trợ</span>
                                <span className='col-1'>VN</span>
                                <div className='col-1 center'></div>
                                <span className='col-1'>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-banner'>
                    <div className='bg-trans'>
                    <div className='home-banner-content '>
                    
                    <div className='title-1'>
                        <h1 className=''>Nền tảng y tế</h1>
                    </div>
                    <div className='title-2'>
                        <span>chăm sóc sức khỏe toàn diện</span>
                    </div>
                    <div className='search row'>
                        <div className='col-12 search-content'>
                            <i class="fas fa-search icon-search"></i>
                            <input className='input-search' type='text' placeholder='Tìm kiếm'/>
                        </div>
                    </div>
                    <div className='option container'>
                        
                        <div className='option-item'>
                            <i class="fas fa-hospital option-icon"></i>
                            <p className='option-title'>Khám chuyên khoa</p>
                        </div>
                        <div className='option-item'>
                            <i class="fas fa-mobile  option-icon"></i>
                            <p className='option-title'>Khám tử xa</p>
                        </div>
                        <div className='option-item'>
                        <i class="fas fa-notes-medical option-icon"></i>
                            <p className='option-title'>Khám tổng quát</p>
                        </div>
                        <div className='option-item'>
                        <i class="fas fa-glasses option-icon"></i>
                            <p className='option-title'>Xét nghiệm y học</p>
                        </div>
                        <div className='option-item'>
                        <i class="fas fa-code-branch option-icon"></i>
                            <p className='option-title'>Sức khỏe tinh thần</p>
                        </div>
                        <div className='option-item'>
                        <i class="fas fa-hospital option-icon"></i>
                            <p className='option-title'>khám nha khoa</p>
                        </div>
                        <div className='option-item'>
                            <i class="fas fa-mobile  option-icon"></i>
                            <p className='option-title'>khám tử xa</p>
                        </div>
                        <div className='option-item'>
                            <i class="fas fa-mobile  option-icon"></i>
                            <p className='option-title'>khám tử xa</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo:state.user.userInfo ,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
