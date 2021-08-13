import s from "./users.module.css"
import userPhoto from "../../../src/assets/img/unnamed.png"
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.item}>


        {props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={"/Profile/" + u.id}>
                            <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt={'#'}/>
                        </NavLink>
                    </div>
                    <div>

                        {u.followed

                            ? <button disabled={props.isFetchingFollow.some(id => id === u)} onClick={() => {
                                props.unfollowSuccess(u)
                            }}>Unfollow</button>
                            : <button disabled={props.isFetchingFollow.some(id => id === u)} onClick={() => {
                                props.followSuccess(u)

                            }}>Follow</button>
                        }

                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>


            </div>
        )}
        <div className={s.selectedPageAll}>
            {pages.map((p) => {

                return <span key={p} className={props.currentPage.toString() === p.toString() ? s.selectedPage : null}
                             onClick={() => {
                                 props.onePageChanged(p)
                             }}> {p} </span>
            })}


        </div>

    </div>
}


export default Users