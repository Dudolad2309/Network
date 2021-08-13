import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import SideBarReducer from "./SideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers=combineReducers({
    Profile:ProfileReducer,
    Dialog:DialogReducer,
    SideBar:SideBarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store=store;

export default store