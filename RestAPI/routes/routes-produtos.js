const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'produtos'
    });
});

router.get('/:id',(req, res, next) => {
    res.status(200).json({
        message: 'produtos',
        numero: req.params.id
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'produtos',
        numero: req.body
    });
});

module.exports = router;