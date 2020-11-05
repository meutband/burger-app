import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-app-fb73f.firebaseio.com/"
});

export default instance;