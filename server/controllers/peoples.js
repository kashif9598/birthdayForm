const Peoples = require('../models/people');

//create people
const create = async (req, res) => {
    let people = new Peoples(req.body)
    let result = await people.save();
    res.send(result);
}

module.exports = { create }