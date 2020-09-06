import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: () => import('./components/ImageList') },
        { path: '/upload', component: () => import('./components/UploadForm') },
        { path: '/oauth2/callback', component: () => import('./components/AuthHandler') }
    ],
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
