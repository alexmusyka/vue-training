import api from '../../api/imgur';
import { router } from '@/main';

const state = {
    images: [],
};

const getters = {
    allImages: state => state.images,
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token).catch(() => {});

        commit('setImages', response.data.data);

    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
console.log('fgdf')
        await api.uploadImages(images, token);

        await router.push('/');
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}