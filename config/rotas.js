module.exports = app => {

    app.route('/user')
        .post(app.api.user.createUser)
        .get(app.api.user.getUser)
}