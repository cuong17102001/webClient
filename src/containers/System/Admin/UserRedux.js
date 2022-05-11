import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {userAllCodeService} from "../../../services/userService";
import * as actions from "../../../store/actions";
import "./UserRedux.scss"

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

    handleOnChangeImg = (event) =>{
        let data = event.target.files
        let file = data[0]
        
        if (file) {
            const objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImg : objectUrl,
                avatar : file
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
            position: this.state.position
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
                alert('Vui lòng điền thông tin ' + arr[index])
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
                            <label htmlFor="inputPassword4">Mật khẩu</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Mật khẩu" 
                            value={password}
                            onChange={(event) => this.handleOnchange(event , "password")}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputEmail4">Họ</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Họ" 
                            value={firstName}
                            onChange={(event) => this.handleOnchange(event , "firstName")}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">Tên</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Tên" 
                            value={lastName}
                            onChange={(event) => this.handleOnchange(event , "lastName")}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputAddress">Số điện thoại</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Số điện thoại" 
                        value={phoneNumber}
                        onChange={(event) => this.handleOnchange(event , "phoneNumber")}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="inputAddress2">Địa chỉ</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Địa chỉ" 
                         value={address}
                         onChange={(event) => this.handleOnchange(event , "address")}/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">Giới tính</label>
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
                            <label htmlFor="inputState">Vị trí</label>
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
                            <label htmlFor="inputState">Quyền</label>
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
                            <label htmlFor="inputState">Ảnh</label>
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
