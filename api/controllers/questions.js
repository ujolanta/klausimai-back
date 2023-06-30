const QuestionModel = require("../models/questions");


module.exports.INSERT_QUESTION = (req, res) => {
    const question = new QuestionModel({
        pavadinimas: "Kažkoks klausimas",
        date: "2023-06-30"

    });
    question.save().then((response) => {
        console.log("response", response);
        res.status(200).json({ response: "vikas ok" });
    }).catch((err) => {
        console.log("Err", err);
        res.status(500).json({ response: "error inserting question" }); s
    })


    res.status(200).json({ response: "post works" });


}

module.exports.GET_QUESTIONS = (req, res) => {
    res.status(200).json({ response: "get all works" });

};