import {createStore} from 'vuex';
// import {axios} from 'axios';
import axios from '../axios-auth';

const store = createStore({
    state() {
        return {
            token: null,
            username: null,
            role: 'User',
            logged_in: null
        }
    },
    getters: {

    },
    mutations: {
        saveToken(state, params) {
            state.token = params.token;
            state.username = params.username;
            state.role = params.role;
            state.logged_in = true;
        }
    },
    actions: {
        logout() {
            return new Promise((resolve) => {
                localStorage.clear();
                this.state.token = null;
                this.state.username = null;
                this.state.role = 'User';
                this.state.logged_in = false;
                resolve();
            })
        },
        autoLogin({commit}) {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');

            if (!token)
                return;
            
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit('saveToken', {
                username: username, 
                token: token,
                role: role
            })
            
        },
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                axios.post('/users/login', {username: params.username, password: params.password})
                .then((result) => {
                    axios.defaults.headers.common["Authorization"] = "Bearer " + result.data.token;
                    console.log(result.data.username);
                    console.log(result.data.password);
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('username', result.data.username);
                    localStorage.setItem('role', result.data.role );

                    commit('saveToken', {
                        username: result.data.username, 
                        token: result.data.token,
                        role: result.data.role
                    })
                    resolve();
                }).catch((error) => {
                    console.log(error);
                    reject();
                })
            })
        }
    }
});

export default store;