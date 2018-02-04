const express = require('express');
const routeHelpers = require('./_helpers');
const router = express.Router();
const emptyPromise = require('empty-promise');

router.get('/ping', (req, res) => {
    res.send('pong');
});

router.get('/login', function(req, res) {
    res.render(
        'index', {});
});

router.get('/home', routeHelpers.ensureAuthenticated, (err, req, res, next) => {
    if (err) {
        return res.render(
            'index', {});
    };

    return emptyPromise()
        .then(() => {
            // res.render('home', {});
            return res.json({ id : "testing"});
    }).catch((err) => {
        return next(err);
    });
});

function emptyFunction() {
    return;
}

function loginRequired(req, res, next){
    if(typeof req == 'undefined'){
        res.redirect('/app/login');
    } else {
        next();
    }
    next();
}


module.exports = router;
