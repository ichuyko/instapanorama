let
    fs = require('fs'),
    gm = require('gm').subClass({imageMagick: true}),
    Promise = require("bluebird");

// Default configuration
let imgFile = "image.jpg";  // image to split
let parts = 4;              // number of parts

let w, h, wp;
var args = process.argv;


console.log("Loading....");

function getSize(file){
  return new Promise(function(resolve, reject) {
    gm(file).size(function (err, size) {
      if (!err)
        resolve(size);
      else
        reject(err);
      });
    console.log("Size is loaded.")
  });
}

function createPart(i){
  return new Promise(function(resolve, reject) {
    console.log("Splitting to part " + i)
    gm(imgFile)
    .gravity('West')
    .crop(wp, h, wp * (i-1), 0)
    .write('part' + i + '.jpg', function (err) {
      if (!err)
        resolve(i);
      else
        reject(err)
    })

  });
}

getSize(imgFile).then(function(size) {

  if (args.length >= 4){
    imgFile = args[2];
    parts = args[3];
  }

  // console.log(size)
  w = size.width;
  h = size.height;
  wp = (w - w%parts) / parts;

  for (let i = 1; i<=parts; i++)
    createPart(i).then(function(i) {
      console.log("Part " + i + " is done.")
    });

});


function onExit(args){
  console.log("=====================================");
  console.log("You can find results in next folder: " + __dirname);
  console.log("=====================================");
  console.log("Uptime: " + process.uptime() + " sec");
  console.log("Enjoy!");
  // process.exit(1);
}

process.on('exit', onExit);


