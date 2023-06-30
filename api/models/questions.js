const mongoose = require('mongoose');


const questionSchema = mongoose.Schema({
    pavadinimas: { type: String, require: true },
    date: { type: Date }
});

module.exports = mongoose.model("Question", questionSchema);
