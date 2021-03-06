var express = require('express');
var router = express.Router();
var colorfile = require('../public/color.json');
var colBlack = colorfile.colors[0];
var colWhite = colorfile.colors[1];
var colRed = colorfile.colors[2];
var colBlue = colorfile.colors[3];
var colYellow = colorfile.colors[4];
var colGreen = colorfile.colors[5];
var colNone = colorfile.colors[6];


router.get('/:color', function(req, res, next) {
  var mine = getColor(req.params.color);
  res.json(mine)
});

function getColor(col) {
  var input = col;
  var test = input.toLowerCase();

  for(var i = 0; i < colorfile.colors.length; i++) {
    if(colorfile.colors[i].color === test) {
      return colorfile.colors[i];
    }
  }
  // if(input == 'black') 
  // {
  //   test = colBlack;
  // }
  // else if(input == 'white') 
  // {
  //   test = colWhite;
  // }
  // else if(input == 'red') 
  // {
  //   test = colRed;
  // }
  // else if(input == 'blue') 
  // {
  //   test = colBlue;
  // }
  // else if(input == 'yellow') 
  // {
  //   test = colYellow;
  // }
  // else if(input == 'green') 
  // {
  //   test = colGreen;
  // }
  // else 
  // {
  //   test = colNone;
  // }
  // return test;
}

module.exports = router;