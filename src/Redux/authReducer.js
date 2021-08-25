import {usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "SET_USER_DATA"


let initialStat = {

    id: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialStat, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload


            }


        default:
            return state;
    }
};

export const setUserData = (id, login, email, isAuth) => {

    return {type: SET_USER_DATA, payload: {id, login, email, isAuth}};
};

export const getAuth = () => async (dispatch) => {

    let response = await usersAPI.getLogin()

    let {id, login, email} = response.data.data
    if (response.data.resultCode === 0) {

        dispatch(setUserData(id, login, email, true))

    }

}


export const login = (email, password, rememberMe) => async (dispatch) => {


    let response = await usersAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {

        dispatch(getAuth())

    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Warning error"
        dispatch(stopSubmit("Login", {_error: messages}))
    }

}

export const logout = () => async (dispatch) => {

    let response = await usersAPI.logout()

    if (response.data.resultCode === 0) {

        dispatch(setUserData(null, null, null, false))

    }

}

export default authReducer;