import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import SideBarReducer from "./SideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
	Profile: ProfileReducer,
	Dialog: DialogReducer,
	SideBar: SideBarReducer,
	UsersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store