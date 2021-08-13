import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer"
import Friends from "./components/Navbar/Friends/Friends";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar state={props.state}/>

            <div className="app-wrapper-content">
                <Route
                    path="/Profile/:userId?"
                    render={() => (
                        <ProfileContainer/>
                    )}
                />
                <Route
                    path="/Dialogs"
                    render={() => (
                        <DialogsContainer/>
                    )}
                />
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>

                <Route
                    path="/Users"
                    render={() => (
                        <UsersContainer/>
                    )}
                />
                <Route
                    path="/Friends"
                    render={() => (
                        <Friends />
                    )}
                />
                <Route
                    path="/Login"
                    render={() => (
                        <Login/>
                    )}
                />

            </div>
        </div>
    );
};

export default App;
