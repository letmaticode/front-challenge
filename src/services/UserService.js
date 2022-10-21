import Environment from "../environment";

import Api from './ApiService';

export const UserService = {
    users: (page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/users?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    userLessons: (userId, page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/users/${userId}/lessons?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
    userFriendships: (userId, page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/users/${userId}/friendships?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
