var express = require('express');
var router = express.Router();
var colorfile = require('../public/color.json');


router.get('/:color', function(req, res) {
  var file =  colorfile;
  res.json(file);

});

module.exports = router;