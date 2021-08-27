import {createSelector} from "reselect";

export const getPageSize1 = (state) => {
	return state.UsersPage.pageSize
};
export const getTotalUsersCount1 = (state) => {
	return state.UsersPage.totalUsersCount
};
export const getCurrentPage1 = (state) => {
	return state.UsersPage.currentPage
};
export const getIsFetching1 = (state) => {
	return state.UsersPage.isFetching
};
export const getIsFetchingFollow1 = (state) => {
	return state.UsersPage.isFetchingFollow
};
export const getUsersDumb = (state) => {
	return state.UsersPage.users
};
export const getUser1 = createSelector(getUsersDumb,
	(users) => {
		return users.filter(users => true)
	});










