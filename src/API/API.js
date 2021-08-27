import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "4d3c8735-8b91-48cd-9bc1-2712943bf831"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return (
          instance.get(`users?page=${currentPage}&count=${pageSize}`)
        );
    },
    getLogin() {
        return instance.get(`auth/me`);
    },
    getProfile(userId) {
        console.warn('Obsolete method.Please use ProfileAPI');
        return ProfileAPI.getProfile(userId)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`,);
    },
};

export const followAPI = {
    getFollow(u) {
        return instance.post(`follow/${u.id}`);
    },
    getUnfollow(u) {
        return instance.delete(`follow/${u.id}`);
    },
};

export const ProfileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status});
    }
}