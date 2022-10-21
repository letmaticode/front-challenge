import { BehaviorSubject } from 'rxjs';

import { fetchApiLogin, fetchApiAuth } from './FakeApi';
// import i18n from "i18n";

import Environment from "../environment";

import User from "../models/User";


const currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));  // receive initial value, only when do next()

export const AuthService = {
    expirationTime: 60 * 5,  // Seconds
    idleInterval: null,
    idleTime: 0,
    currentUser: currentUserSubject.asObservable(),

    currentUserValue: () => {
        return currentUserSubject.value
    },

    login: (email, password) => {
        return fetchApiLogin(email, password)
            .then(response => {
                if (response.ok) {
                    sessionStorage.setItem('access', response.access_token);
                    sessionStorage.setItem('refresh', response.expires_in);
                    return response;
                }
                throw response;
            });
    },

    confirm: (token) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token })
        };

        return fetch(`${Environment.api}api/auth/confirm/`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json().then(data => {
                        sessionStorage.setItem('message', data.message);
                        sessionStorage.setItem('user', data.user);
                        return data;
                    });
                }
                throw response;
            });
    },

    refresh: async () => {
        const refresh = sessionStorage.getItem('refresh');
        if (refresh) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refresh: refresh })
            };
            let response = await fetch(`${Environment.api}api/auth/refresh/`, requestOptions);
            if (response.status === 200) {
                let data = await response.json()
                sessionStorage.setItem('access', data.access_token);
                sessionStorage.setItem('refresh', data.expires_in);
            }
        }
    },

    logout: () => {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('access');
        sessionStorage.removeItem('refresh');
        currentUserSubject.next(null);
        AuthService.removeListeners();
    },

    loadUser: async (refresh = false) => {
        if (refresh) {
            await AuthService.refresh();
        }

        return new Promise((resolve, reject) => {
            const access = sessionStorage.getItem('access');
            if (!access) {
                reject("No Access");
                return;
            }

            return fetchApiAuth()
                .then(data => {
                    if (data.ok) {
                        if (!data.habilitado) {
                            AuthService.logout();
                            reject(data);
                        } else {
                            let user = new User(data);
                            sessionStorage.setItem('currentUser', JSON.stringify(user));
                            // sessionStorage.setItem('i18nextLng', user.language);
                            // i18n.changeLanguage(user.language)
                            currentUserSubject.next(user);
                            AuthService.startListeners();
                            resolve(user);
                        }

                    } else {
                        AuthService.logout();
                        reject(data);
                    }
                }).catch(error => {
                    AuthService.logout();
                    reject(error);
                });
        });
    },

    getToken() {
        return `Bearer ${sessionStorage.getItem('access')}`;
    },

    resetIdle: function () {
        const pendingDelta = AuthService.expirationTime - AuthService.idleTime;

        // If detects user activity and token is going to be expired refresh it
        if (/*pendingDelta > 0 &&*/ pendingDelta < 60) {
            AuthService.idleTime = 0;
            AuthService.refresh();
        }
    },

    timerIncrement: function () {
        AuthService.idleTime = AuthService.idleTime + 1;

        // Autologout when idleTime passes the expiration delta
        // if (AuthService.idleTime > AuthService.expirationTime) {
        //   AuthService.removeListeners();
        //   AuthService.logout();
        // }
    },

    removeListeners: () => {
        document.removeEventListener('keypress', AuthService.resetIdle, false);

        if (AuthService.idleInterval) clearInterval(AuthService.idleInterval);
    },

    startListeners: () => {
        AuthService.idleInterval = setInterval(AuthService.timerIncrement, 1000);
        document.addEventListener('mousemove', AuthService.resetIdle, false);
        document.addEventListener('keypress', AuthService.resetIdle, false);
    },
};
