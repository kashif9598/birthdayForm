const Peoples = require('../models/people');

//create people
const create = async (req, res) => {
    let people = new Peoples(req.body)
    let result = await people.save();
    res.send(result);
}

//get people data
const getPeople = async (req, res) => {
    let peoples = await Peoples.find()
    if(peoples.length > 0){
        res.send(peoples)
    } else {
        res.send({ result: "No result found"})
    }
}

module.exports = { create, getPeople }