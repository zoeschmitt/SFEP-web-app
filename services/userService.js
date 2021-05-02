import axios from 'axios';

/*
Example of calling one of these functions:

** PARAMS HAVE TO BE IN THE RIGHT ORDER**

const res = await createUser('John Smith', 'johnsmith@gmail.com', 'mypassword', 'Professor');

User Object:

{
    _id: string,
    name: string,
    password: string,
    email: string, 
    title: string
}

*/

class UserService {

    /*
    Params Required:
    - name (string)
    - email (string)
    - password (string)
    - title (string)
    
    Returns: ** RETURNS AUTH TOKEN**
    - Successful: Will return a map -> {status: true, msg: 'success message', token: string}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - email (string)
    - password (string)
    
    Returns: ** RETURNS AUTH TOKEN**
    - Successful: Will return a map -> {status: true, msg: 'success message', token: string}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - userId (string)
    
    Returns: 
    - Successful: Will return a map -> {status: true, user: user object}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - name (string)
    - email (string)
    - password (string)
    - title (string)
    - userId (string)
    - token (string)
    
    Returns: 
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    ** REMEMBER TO CLEAR THE AUTH TOKEN LOCALLY**
    
    Params Required:
    - userId (string)
    - token (string)
    
    Returns: 
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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