var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema_frase = new Schema(
    {
      quote  : String,
      author : String,
    },
    { versionKey: false, collection: 'frases'  }
);

module.exports = mongoose.model("Frase", Schema_frase);