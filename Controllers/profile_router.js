var profile_manager = require('')
var validator = require('../Validators/profile_valitator')

module.exports = (app) => {
    app.get('/Profile:id', validator.get, (req, res) => {
        var profileManager = new profile_manager();
        try {
            var resp = profileManager.getProfile(req.params.idServico);
        } catch (err) {
            //verify err
            return res.status(500).send();
        }

        return res.json(resp);



    });


}