const profile_manager = require('../Adapters/profile_manager')
const validator = require('../Validators/profile_valitator')

module.exports = (app) => {
    const profileManager = new profile_manager();

    app.get('/Profile', validator.get, (req, res) => {

        try {

            var resp = profileManager.getProfile(req.query);
            return res.json(resp);

        } catch (err) {
            return res.status(500).send(err.message);
        }
    });

    app.post('/Profile', validator.post, (req, res) => {
        try {

            var resp = profileManager.addProfile(req.body)
            return res.status(201).send(resp)

        } catch (err) {

            return res.status(500).send(err.message);
        }

    });

    app.put('/Profile', validator.put, (req, res) => {
        try {

            var resp = profileManager.updateProfile(req.body)
            return res.status(201).send(resp)

        } catch (err) {

            return res.status(500).send(err.message);
        }
    });

    app.delete('/Profile', validator.del, (req, res) => {

        try {
            var resp = profileManager.removeProfile(req.body)
            return res.status(201).send(resp)
        } catch (err) {
            return res.status(500).send(err.message);
        }

    })

}