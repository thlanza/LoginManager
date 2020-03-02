var service_manager = require('../Adapters/service_manager');
var validator = require('../Validators/service_validator');

module.exports = (app) => {

    app.get('/Service', (req, res) => {
        var service = new service_manager();

        var list = service.listService();

        res.json(list);
    });

    app.get('/Service:id', (req, res) => {
        var service = new service_manager();

        try {
            var obj = service.getService(req.id);
        }
        catch (e) {
            res.status(404).send(e);
        }

        res.json(obj);
    });

    app.post('/Service', validator, (req, res) => {
        var service = new service_manager();

        try {
            service.addService(req.body);
        }
        catch (e) {
            res.status(500).send(e);
        }

        res.status(201).send('Ok');
    });

    app.delete('/Service', (req, res) => {
        var service = new service_manager();

        try {
            service.removeService(req.body);
        }
        catch (e) {
            res.status(500).send(e);
        }

        res.send('Ok');
    });

    app.put('/Service', (req, res) => {
        var service = new service_manager();

        try {
            service.editService(req.body);
        }
        catch (e) {
            res.status(500).send(e);
        }

        res.send('Ok');
    });
}