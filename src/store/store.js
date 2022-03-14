import {createStore} from 'vuex';
// import {axios} from 'axios';
import axios from '../axios-auth';

const store = createStore({
    state() {
        return {
            token: null,
            username: null,
            logged_in: null
        }
    },
    getters: {

    },
    mutations: {
        saveToken(state, params) {
            state.token = params.token;
            state.username = params.username;
            state.logged_in = true;
        }
    },
    actions: {
        logout() {
            localStorage.clear();
            this.state.token = null;
            this.state.username = null;
            // this.state.role = null;
            this.state.logged_in = false;
        },
        autoLogin({commit}) {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');

            if (!token)
                return;
            
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit('saveToken', {
                username: username, 
                token: token
            })
            
        },
        login({commit}, params) {
            return new Promise((resolve, reject) => {
                axios.post('/users/login', {username: params.username, password: params.password})
                .then((result) => {
                    axios.defaults.headers.common["Authorization"] = "Bearer " + result.data.token;
                    
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('username', result.data.username);

                    commit('saveToken', {
                        username: result.data.username, 
                        token: result.data.token
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