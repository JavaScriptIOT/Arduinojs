module.exports = function(app, logger, router) {
    logger.info('module script');
    var vm = require('vm');

    router.get('/log', function(req, res) {
        throw "error test";
        res.json({
            log: 'hooray! welcome to our api!'
        });
    });

    router.post('/run', function(req, res) {
        var script = req.body.script;
        //var runscript = vm.runInThisContext('localVar = 1;',
        //    'myfile.vm');
        console.log(script);
        var ret = eval(script);

        res.json({
            message: 'run script api!'
        });
    });

    app.use('/script', router);

}