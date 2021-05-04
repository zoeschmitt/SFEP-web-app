import PostService from "./postService";
import UserService from "./userService";
// add .babelrc to project root, npm install jest, npm install @babel/plugin-transform-modules-commonjs, npm install axios
///*** THESE FUNCTIONS TEST THE POSTSERVICE ***///
const service = new PostService();
const userService = new UserService();

var user;
var post;
var comment;
var auth_token;

it('Sign In User to get token', async() => {
    var res = await userService.signIn('zoeschmitt@gmail.com', 'password');
    auth_token = res.token;
    user = res.user;
    expect(res.status).toEqual(true);
    expect(res.token).toEqual(expect.stringContaining(''));
});

it('Get All Posts', async() => {
    var res = await service.getAllPosts();
    expect(res.status).toEqual(true);
    expect(res.posts).toEqual(expect.arrayContaining([]));
});

it('Create Post', async() => {
    var res = await service.createPost(user._id, 'Test Post Title', 'Test post body', user.name, user.title, auth_token);
    post = res.post;
    expect(res.status).toEqual(true);
});

it('Update Post Likes', async() => {
    var res = await service.updateLikes(user._id, post._id, true, auth_token);
    expect(res.status).toEqual(true);
});

it('Update Post Credibility', async() => {
    var res = await service.updateCredibility(user._id, post._id, true, auth_token);
    expect(res.status).toEqual(true);
});

it('Search Posts', async() => {
    var res = await service.search('Test');
    expect(res.status).toEqual(true);
    expect(res.posts).toEqual(expect.arrayContaining([]));
});

it('Create Comment', async() => {
    var res = await service.createComment(user._id, post._id, 'Test comment', user.name, user.title, auth_token);
    comment = res.comment;
    expect(res.status).toEqual(true);
});

it('Get All Comments', async() => {
    var res = await service.getDiscussion(post._id);
    expect(res.status).toEqual(true);
    expect(res.comments).toEqual(expect.arrayContaining([]));
});

it('Delete Comment', async() => {
    var res = await service.deletePost(comment._id, auth_token);
    expect(res.status).toEqual(true);
});

it('Delete Post', async() => {
    var res = await service.deleteComment(post._id, auth_token);
    expect(res.status).toEqual(true);
});