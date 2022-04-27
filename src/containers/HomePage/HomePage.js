import React, { Component } from 'react';

import { connect } from 'react-redux';
import HeaderHome from './HeaderHome';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import Doctor from './Section/Doctor';
import "./HomePage.scss"
class HomePage extends Component {

    render() {
      
        return (
            <div>
                <HeaderHome/>
                <Specialty/>
                <Doctor/>
                <MedicalFacility/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
