import api from '../../api/imgur';
import { router } from '@/main';
import qs from 'qs';

const state = {
    token: localStorage.getItem('imgur_token'),
};

const getters = {
    isLoggedIn: (state) => !!state.token,
};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    },
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', '')),
            token = query.access_token;

        commit('setToken', token);
        localStorage.setItem('imgur_token', token);

        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        localStorage.removeItem('imgur_token');
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}