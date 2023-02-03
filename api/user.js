module.exports = app => {
    const createUser = (req, res) => {
        app.db('user').insert({
            id: req.body.id, 
            name: req.body.name,
            course: req.body.course,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        })
        .then((e)=>res.json(e))
        .catch((error)=>res.status(204).json(error))
    }

    const getUser = (req, res) => {
        app.db('user')
        .then((e)=>res.json(e))
        .catch((error)=>res.status(204).json(error))
    }

    return { createUser, getUser }
}