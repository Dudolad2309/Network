import {ProfileAPI, usersAPI} from "../API/API";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"


let initialStat = {
    PostData: [
        {id: 1, message: "Hello how are you?", countLike: 5},
    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state = initialStat, action) => {
    switch (action.type) {
        case ADD_POST: {

             return {
                ...state,
                PostData: [...state.PostData, {id: 1, message: action.onChangePost, countLike: 5}]
            }

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (onChangePost) => {
    return {type: ADD_POST, onChangePost};
};

export const setUserProfile = (profile) => {

    return {type: SET_USER_PROFILE, profile};
};
export const setStatus = (status) => {

    return {type: SET_STATUS, status};
};

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((data) => {

            dispatch(setUserProfile(data))

        });

    }
}
export const getStatus = (userId) => {

    return (dispatch) => {
        ProfileAPI.getStatus(userId).then((response) => {

            dispatch(setStatus(response.data))

        });

    }

}
export const updateStatus = (status) => {
    return (dispatch) => {


        ProfileAPI.updateStatus(status).then((response) => {

            if (response.data.resultCode === 0) {

                dispatch(setStatus(status))
            }
        });

    }
}

export default ProfileReducer;
