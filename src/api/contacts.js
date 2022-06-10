import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://localhost:3006/',
// });

export default axios.create({
    baseURL: 'http://localhost:3006/',
    headers: {
        'Content-Type': 'application/json'
    }
}
);
