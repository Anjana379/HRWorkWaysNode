import loginController from '../controller/loginController';

module.exports = function(app)
{
    app.route('/api/login/create').post(loginController.createUser);

    app.route('/api/login/list').get(loginController.listUser);

    app.route('/api/login/search').post(loginController.searchUser);

    app.route('/api/login/:id').get(loginController.searchUser);
}