const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true, min: 3 },
    email: { type: String, required: true, min: 3 },
    password: { type: String, required: true, min: 10 },
    q_id: { type: String },
    a_id: { type: String }
});

module.exports = mongoose.model("User", userSchema);
