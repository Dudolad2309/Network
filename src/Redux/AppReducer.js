import {getAuth} from "./authReducer";


const SET_INITIALIZED = "SET_INITIALIZED"


let initialStat = {

    initialized: false


}

const AppReducer = (state = initialStat, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const setInitializedSuccess = () => {

    return {type: SET_INITIALIZED};
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
    dispatch(setInitializedSuccess())
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })
}



export default AppReducer;