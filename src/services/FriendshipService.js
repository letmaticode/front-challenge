import Environment from "../environment";

import Api from './ApiService';

export const FriendshipService = {
    friendships: (page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/friendships?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
