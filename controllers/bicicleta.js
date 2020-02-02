let Bicicleta = require("../models/Bicicleta");

exports.bicicleta_list = function(req,res) {
  res.render("bicicletas/index", {bicis: Bicicleta.allBicis});
}
