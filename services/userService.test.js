import UserService from "./userService";
// add .babelrc to project root, npm install jest, npm install @babel/plugin-transform-modules-commonjs, npm install axios
///*** THESE FUNCTIONS TEST THE USERSERVICE ***///
const service = new UserService();
const userId = '608eedf79d440fe3b1f620ee';
var user;
var auth_token;

it('Sign In User', async() => {
    var res = await service.signIn('zoeschmitt@gmail.com', 'password');
    auth_token = res.token;
    user = res.user;
    expect(res.status).toEqual(true);
    expect(res.token).toEqual(expect.stringContaining(''));
});

it('Get User', async() => {
    var res = await service.getUserInfo(userId);
    expect(res.status).toEqual(true);
});

it('Update User', async() => {
    var res = await service.updateUser(user.name, user.email,'password', user.title, user._id, auth_token);
    user = res.user;
    expect(res.status).toEqual(true);
});

it('Logout User', async() => {
    var res = await service.logout(user._id, auth_token);
    expect(res.status).toEqual(true);
});