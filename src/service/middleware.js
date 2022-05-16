import Cookie from '../service/cookie';
import axios from 'axios';
import store from '../store';

export default {
    async redirectIfNotAuthenticated(to, from, next) {
        const token = Cookie.getToken();
        let n;

        if (!token) {
            n = {name: 'login'};
        }

        // Verificar se o token está valido
        await axios.post('/me').then((response) => {
            if (!store?.state?.user?.id) store.commit('user/STORE_USER', response.data.data);
        }).catch(() => {
            Cookie.deleteToken();
            n = {name: 'login'};
        });

        next(n);
    },
    redirectIfAuthenticated(to, from, next) {
        const token = Cookie.getToken();
        let n;

        if (token) {
           n = {name: 'index'};
        }

        next(n);
    },
};