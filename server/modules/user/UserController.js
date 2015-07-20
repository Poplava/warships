import UserModel from './UserModel';

export default class UserController {
    static register(req, res) {
        processRegister(req, res, {
            username: req.body.username
        });
    }

    static get(req, res) {
        res.json({foo: 'bar', id: req.params.id});
    }
}

function processRegister(req, res, profile) {
    var user = new UserModel(profile);

    user.save().then(function(profile) {
        res.json(profile);
    }, function(err) {
        res.status(500).send(err);
    });
}
