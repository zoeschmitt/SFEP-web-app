import axios from 'axios';


/*
Example of calling one of these functions:

** PARAMS HAVE TO BE IN THE RIGHT ORDER**

const res = await getAllPosts();

Post Object:

{
    _id: string,
    userId: string,
    title: string,
    body: string,
    userName: string,
    userTitle: string,
    likes: [array of userIds],
    dislikes: []array of userIds,
    credibleVotes: [array of userIds],
    uncredibleVotes: [array of userIds],
}

Commment Object: 

{
    _id: string,
    postId: string,
    userId: string, 
    text: string,
    userName: string,
    userTitle: string,
}

*/

class PostService {

    /*
    Params: none
    Returns:
    - Successful: Will return a map -> {status: true, posts: post objects}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - userId (string)
    - postTitle (string)
    - postBody (string)
    - userName (string)
    - userTitle (string)
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - userId (string)
    - postId(string)
    - like (bool) if user is liking the post: true
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
    async updateLikes(userId, postId, like, token) {
        try {
            const reqBody = {
                postId: postId,
                updateType: like ? 1 : -1,
            }

            const res = await axios.post(`http://localhost:8000/api/updateLikes/${userId}`, reqBody, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully updated' }
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
    - postId(string)
    - credibleVote (bool)
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
    async updateCredibility(userId, postId, credibleVote, token) {
        try {
            const reqBody = {
                postId: postId,
                updateType: credibleVote ? 1 : -1,
            }

            const res = await axios.post(`http://localhost:8000/api/updateCredibility/${userId}`, reqBody, { headers: { 'auth-token': token } });

            if (res.status == 200) {
                return { 'status': true, 'msg': 'Successfully updated' }
            } else {
                return { 'status': false, 'msg': `${res.data.error}` }
            }
        } catch (e) {
            return { 'status': false, 'msg': `${e}` }
        }
    }

    /*
    Params Required:
    - searchQuery (string)
    
    Returns:
    - Successful: Will return a map -> {status: true, posts: post objects}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - postId(string)
    
    Returns:
    - Successful: Will return a map -> {status: true, comments: comment objects}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - userId (string)
    - postId (string)
    - text (string)
    - userName (string)
    - userTitle (string)
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - postId (string)
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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

    /*
    Params Required:
    - commentId (string)
    - token (auth token (string))
    
    Returns:
    - Successful: Will return a map -> {status: true, msg: 'success message'}
    - Unsuccessful: Will return a map -> {status: false, msg: 'why it was unsuccessful'}
    */
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