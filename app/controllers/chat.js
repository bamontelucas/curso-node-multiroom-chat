module.exports.init = function(app, req, res) {
    var data = req.body;

    req.assert('apelido', 'Preencha um nome ou apelido').notEmpty();
    req.assert('apelido', 'Preencha ou apelido deve ter entre 3 e 15 caracteres').len(3, 15);
    
    var errors = req.validationErrors();

    if (errors) {
        res.render('index', {errors});
        return;
    }

    res.render('chat');
}