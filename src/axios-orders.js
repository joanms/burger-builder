import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-8b122.firebaseio.com/'
});

export default instance;