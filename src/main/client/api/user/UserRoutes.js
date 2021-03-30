import {UserEndpoint} from "../../enums/endpoint/user/UserEndpoint";
import axios from 'axios';

export const fetchAllUsers = () => {
    return axios.get(UserEndpoint.ALL_USERS)
        .then(results => results.data._embedded.users);
}

export const fetchUserById = (id) => {
    return axios.get(UserEndpoint.USER_BY_ID.replace("{id}", id))
        .then(results => results.data);
}