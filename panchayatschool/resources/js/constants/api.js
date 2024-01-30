const _token = localStorage.getItem('_token');

const baseUrl = import.meta.env.VITE_APP_URL + '/api';

const header = {
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${_token}`,
    }
};

export { baseUrl, header };
