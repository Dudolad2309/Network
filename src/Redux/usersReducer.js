import {followAPI, usersAPI} from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_PRELOADER = "SET_PRELOADER"
const SET_PRELOADER_FOLLOW = "SET_PRELOADER_FOLLOW"

let initialStat = {

    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    isFetchingFollow: []

}

const usersReducer = (state = initialStat, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:

            return {

                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:

            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:

            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_PRELOADER:

            return {
                ...state, isFetching: action.loader
            }
        case SET_PRELOADER_FOLLOW:

            return {
                ...state,
                isFetchingFollow: action.preloader
                    ? [...state.isFetchingFollow, action.userId]
                    : state.isFetchingFollow.filter(id => id !== action.preloader)
            }
        default:
            return state;
    }
};

export const follow = (userId) => {
    return {type: FOLLOW, userId};
};
export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId};
};
export const setUsers = (users) => {
    return {type: SET_USERS, users};
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage};
};
export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount};
};
export const setPreloader = (loader) => {
    return {type: SET_PRELOADER, loader};
};
export const setPreloaderFollow = (preloader, userId) => {

    return {type: SET_PRELOADER_FOLLOW, preloader, userId};
};


export const getUserThunkCreat = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setPreloader(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setPreloader(false))
            dispatch(setUsers(data.items))
        })
    }
}
export const getUserPageThunkCreat = (pageNumber, pageSize) => {
    return (dispatch) => {

        dispatch(setCurrentPage(pageNumber))
        dispatch(setPreloader(true))
        usersAPI.getUsers(pageNumber, pageSize).then((data) => {
            dispatch(setPreloader(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}
export const followSuccess = (u) => {
    return (dispatch) => {
        dispatch(setPreloaderFollow(true,u))

        followAPI.getFollow(u).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow(u.id))
            }
            dispatch(setPreloaderFollow(false,u))
        });

    }
}
export const unfollowSuccess = (u) => {
    return (dispatch) => {
        dispatch(setPreloaderFollow(true, u))

        followAPI.getUnfollow(u).then((response) => {

            if (response.data.resultCode === 0) {

                dispatch(unfollow(u.id))

            }
            dispatch(setPreloaderFollow(false, u))
        });

    }
}
export default usersReducer;
