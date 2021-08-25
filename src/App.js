import React from "react";
import {Route, withRouter} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./common/preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/Profile/:userId?" render={() => (<ProfileContainer/>)}/>
                    <Route path="/Dialogs" render={() => (<DialogsContainer/>)}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Users" render={() => (<UsersContainer/>)}/>
                    <Route path="/Login" render={() => (<Login/>)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
