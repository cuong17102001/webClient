import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {userAllCodeService} from "../../../services/userService";
import * as actions from "../../../store/actions";
import "./UserRedux.scss"
import CommonUtils from  '../../../utils/CommonUtils'

class UserRedux extends Component {

    constructor(props){
        super(props);
        this.state = {
            genderArr : [],
            positionArr : [],
            roleArr : [],
            previewImg : "",

            email :'',
            password : '',
            firstName : '',
            lastName : '',
            phoneNumber : '',
            address : '',
            gender : 'M',
            position : 'P0',
            role: 'R1',
            avatar:''

        }
    }

    async componentDidMount() {

        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // try {
        //     let res = await userAllCodeService('gender')
        //     if (res && res.errCode == 0) {
        //         this.setState({
        //             genderArr : res.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr : this.props.genderRedux,
    
            })
        }

        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr : this.props.positionRedux,
  
            })
        }

        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr : this.props.roleRedux,
            })
        }
    }

    handleOnChangeImg = async (event) =>{
        let data = event.target.files
        let file = data[0]
        
        if (file) {
            const base64 = await CommonUtils.getBase64(file)
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImg : objectUrl,
                avatar : base64
            }) 
        }
    }

    handleCreateUser = () =>{
        if (this.checkValidInput() === false) {
            return
        }
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            address : this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            role: this.state.role,
            position: this.state.position,
            image : this.state.avatar
        })
    }

    handleOnchange = (event , value) =>{
        let copyState = {...this.setState}
        copyState[value] = event.target.value
        this.setState({
            ...copyState
        })

    }


    checkValidInput = () =>{
        let isValid = true;
        let arr = ['email' , 'password', 'firstName' , 'lastName' , 'phoneNumber' , 'address' ]
        for (let index = 0; index < arr.length; index++) {
            if (!this.state[arr[index]]) {
                isValid = false
                alert('Vui l??ng ??i???n th??ng tin ' + arr[index])
                break
            }
            
        }
        return isValid;
    }
    render() {
        console.log(this.state);
        let isLoadingGender = this.props.isLoadingGender;
        let {email , password, firstName , lastName , phoneNumber , address , gender ,position , role ,avatar} = this.state;
        return (
            <div className='user-redux-container'>
                <div className='title text-center'>Manage users</div>
                <div className='container'>
                    <div className='row'>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" 
                            value={email}
                            onChange={(event) => this.handleOnchange(event , "email")}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">M???t kh???u</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="M???t kh???u" 
                            value={password}
                            onChange={(event) => this.handleOnchange(event , "password")}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">H???</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="H???" 
                            value={firstName}
                            onChange={(event) => this.handleOnchange(event , "firstName")}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">T??n</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="T??n" 
                            value={lastName}
                            onChange={(event) => this.handleOnchange(event , "lastName")}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputAddress">S??? ??i???n tho???i</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="S??? ??i???n tho???i" 
                        value={phoneNumber}
                        onChange={(event) => this.handleOnchange(event , "phoneNumber")}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputAddress2">?????a ch???</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="?????a ch???" 
                         value={address}
                         onChange={(event) => this.handleOnchange(event , "address")}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Gi???i t??nh</label>
                            <select 
                             onChange={(event) => this.handleOnchange(event , "gender")} id="inputState" className="form-control">
                                {
                                    this.state.genderArr.map((item , index) =>{
                                        return (
                                            <option key={index} value={item.key}>{item.valueVI}</option>
                                        )
                                    })
                                }
                            
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">V??? tr??</label>
                            <select id="inputState" className="form-control"
                            onChange={(event) => this.handleOnchange(event , "position")}>
                                {
                                    this.state.positionArr.map((item , index) =>{
                                        return (
                                            <option key={index} value={item.key}>{item.valueVI}</option>
                                        )
                                    })
                                }
                            
                            </select>
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Quy???n</label>
                            <select id="inputState" className="form-control"
                            onChange={(event) => this.handleOnchange(event , "role")}>
                                {
                                    this.state.roleArr.map((item , index) =>{
                                        return (
                                            <option key={index} value={item.key}>{item.valueVI}</option>
                                        )
                                    })
                                }
                            
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">???nh</label>
                            <div>
                                <input  type='file' id='previewImg' onChange={(event) => this.handleOnChangeImg(event)}/>
                                <div className=''>
                                    <img className='preview-img' src={this.state.previewImg}/>
                                </div>
                            </div>
                        </div>
                    
                        <button type="button" className="btn btn-primary mt-4"
                        onClick={() =>{this.handleCreateUser()}}
                        
                        >Sign in</button>
                        
                    </div>
                </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux : state.admin.genders,
        positionRedux : state.admin.positions,
        roleRedux : state.admin.roles,
        isLoadingGender : state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart:() => dispatch(actions.fetchGenderStart()),
        getPositionStart:() => dispatch(actions.fetchPositionStart()),
        getRoleStart:() => dispatch(actions.fetchRoleStart()),
        createNewUser : (data) => dispatch(actions.createNewUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
