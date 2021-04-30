import axios from 'axios';


class UserService {
    async createUser(name, email, password, title) {
        try {
            const reqBody = {
                name: name,
                email: email,
                password: password,
                title: title
            }

            const res = await axios.post('http://localhost:8000/api/createUser', reqBody);

            console.log(`req for createUser: ${reqBody}`);
            console.log(`res for createUser: ${res.data}`);

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully created user!', 'token': res.data.token }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async signIn(email, password) {
        try {
            const reqBody = {
                email: email,
                password: password,
            }

            const res = await axios.post('http://localhost:8000/api/signin', reqBody);

            console.log(`req for signIn: ${reqBody}`);
            console.log(`res for signIn: ${res.data}`);

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully logged in', 'token': res.data.token }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async getUserInfo(userId) {
        try {
            const res = await axios.get(`http://localhost:8000/api/user/${userId}`);

            console.log(`res for signIn: ${res.data}`);

            if (res.status == 200) {
                return { 'status': true, 'user': res.data }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async updateUser(name, email, password, title, userId, token) {
        try {
            const reqBody = {
                name: name,
                email: email,
                password: password,
                title: title
            }

            const res = await axios.post(`http://localhost:8000/api/update/${userId}`, reqBody, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully updated user' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async logout(userId, token) {
        try {
            const res = await axios.post(`http://localhost:8000/api/logout/${userId}`, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully updated user' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }
}

export default UserService;