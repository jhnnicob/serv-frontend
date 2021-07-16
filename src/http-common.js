import axios from 'axios';

export default axios.create({
    baseURL: 'http://servserver-env.eba-kawr6n3u.us-east-2.elasticbeanstalk.com/api'
})