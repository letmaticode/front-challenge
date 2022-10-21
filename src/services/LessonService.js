import Environment from "../environment";

import Api from './ApiService';

export const LessonService = {
    lessons: (page = 1, perPage = 15) => {
        return new Promise((resolve, reject) => {
            return Api.fetchNoToken(`${Environment.api}api/lessons?page=${page}&per_page=${perPage}`, 'GET'
            ).then(data => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            }
            );
        });
    },
}
