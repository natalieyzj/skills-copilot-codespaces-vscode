// Create web serve

var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');

/* GET users listing. */
router.post('/create', commentController.createComment);
router.get('/list', commentController.listComment);
router.put('/update/:id', commentController.updateComment);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;