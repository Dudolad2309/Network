import {getAuth} from "./authReducer";



const SET_INITIALIZED = "SET_INITIALIZED"

export type initialStatType = {
    initialized: boolean
};


const initialStat: initialStatType = {
	initialized: false,
};

const AppReducer = (state = initialStat, action: any):initialStatType => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true,
			}
		default:
			return state;
	}
};


type setInitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitializedSuccess = ():setInitializedSuccessActionType => {
	return {type: SET_INITIALIZED};
};

export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuth());
	dispatch(setInitializedSuccess());
	Promise.all([promise]).then(() => {
		dispatch(setInitializedSuccess());
	})
};

export default AppReducer;