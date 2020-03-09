const profile_manager = require('../Adapters/profile_manager')
const validator = require('../Validators/profile_valitator')

module.exports = (app) => {
    const profileManager = new profile_manager();

    app.get('/Profile/:id', validator.get, (req, res) => {

        try {

            var resp = profileManager.getProfile(req.params.id);
            return res.json(resp);

        } catch (err) {
            return res.status(500).send(err.message);
        }



    });
    app.post('Prfile', validator.post, (req, res) => {
        try {

            var resp = profileManager.addProfile(req.body)
            return res.status(201).send(resp)

        } catch (err) {

            return res.status(500).send(err.message);
        }

    })


}