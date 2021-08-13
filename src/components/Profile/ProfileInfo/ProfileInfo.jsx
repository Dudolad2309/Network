import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/preloader/Preloader";
import smile from "../../../assets/img/smile.png"
import smileSad from "../../../assets/img/smileSad.png"
import StatusProfile from "./StatusProfile";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div>
                <img
                    className={s.img}
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="#"
                />
                <div>
                    <StatusProfile  updateStatus={props.updateStatus} status={props.status}/>
                </div>
            </div>


            <div className={s.profile}>
                <img src={props.profile.photos.large} alt={'#'}/>

                <div>Name: {props.profile.fullName}</div>
                <div>Status: {props.profile.aboutMe}</div>
                <div> Contacts:
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                    <div>{props.profile.contacts.mainLink}</div>
                </div>
                <div>If you need work: {props.profile.lookingForAJob !== false ? <img src={smileSad} alt={''}/> :
                    <img src={smile} alt={''}/>}</div>
                <div>Find work:{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};
export default ProfileInfo;
