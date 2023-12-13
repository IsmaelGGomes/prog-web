var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema_frase = new Schema(
    {
      autor  : String,
      frase : String,
    },
    { versionKey: false, collection: 'frases'  }
);

module.exports = mongoose.model("Frase", Schema_frase);