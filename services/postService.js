import axios from 'axios';

class PostService {

    async getAllPosts() {
        try {

            const res = await axios.post('http://localhost:8000/api/posts');

            if (res.status == 200) {
                return { 'status': true, 'posts': res.data }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async createPost(userId, postTitle, postBody, userName, userTitle, token) {
        try {
            const reqBody = {
                title: postTitle,
                body: postBody,
                userName: userName,
                userTitle: userTitle
            }

            const res = await axios.post(`http://localhost:8000/api/post/${userId}`, reqBody, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully created post!' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async search(searchQuery) {
        try {
            const res = await axios.post(`http://localhost:8000/api/search/${searchQuery}`);
            if (res.status == 200) {
                return { 'status': true, 'posts': res.data.posts }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async getDiscussion(postId) {
        try {
            const res = await axios.post(`http://localhost:8000/api/discussion/${postId}`);
            if (res.status == 200) {
                return { 'status': true, 'comments': res.data.discussion }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async createComment(userId, postId, text, userName, userTitle, token) {
        try {
            const reqBody = {
                postId: postId,
                userId: userId,
                text: text,
                userName: userName,
                userTitle: userTitle
            }

            const res = await axios.post(`http://localhost:8000/api/comment`, reqBody, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully created comment!' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async deletePost(postId, token) {
        try {

            const res = await axios.post(`http://localhost:8000/api/deletePost/${postId}`, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully deleted post' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    async deleteComment(commentId, token) {
        try {

            const res = await axios.post(`http://localhost:8000/api/deleteComment/${commentId}`, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully deleted comment' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }
}

export default PostService;