import actionTypes from './actionTypes';
import {userAllCodeService,addNewUserService} from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {

    return async (dispatch , getState) => {
        try {
            dispatch({type :actionTypes.FETCH_GENDER_START})
            let res = await userAllCodeService("gender")
            if (res && res.errCode == 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
        }
    }
}

export const fetchGenderSuccess = (data) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data : data
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {

    return async (dispatch , getState) => {
        try {
            let res = await userAllCodeService("position")
            if (res && res.errCode == 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (error) {
            dispatch(fetchPositionFailed())
        }
    }
}

export const fetchPositionSuccess = (data) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data : data
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {

    return async (dispatch , getState) => {
        try {
            dispatch({type :actionTypes.FETCH_GENDER_START})
            let res = await userAllCodeService("role")
            if (res && res.errCode == 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (error) {
            dispatch(fetchRoleFailed())
        }
    }
}

export const fetchRoleSuccess = (data) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data : data
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUser = (data) =>{
    return async (dispatch , getState) => {
        try {
            let res = await addNewUserService(data)
            console.log("lưu thành công");
            if (res && res.errCode == 0) {
                dispatch(saveUserSuccess())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (error) {
            dispatch(saveUserFailed())
        }
    }
}

export const saveUserSuccess = () =>({
    type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () =>({
    type: actionTypes.CREATE_USER_FAILED
})