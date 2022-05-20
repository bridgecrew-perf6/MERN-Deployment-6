const { request, response } = require("express");
const { Pirate } = require("../models/pirates.models");

//create
module.exports.createPirate = (request, response) => {
    const {name, image, treasure, catchPhrase, crewPosition, pegleg, eyePatch, hookHand} = request.body;
    Pirate.create({
      name, image, treasure, catchPhrase, crewPosition, pegleg, eyePatch, hookHand
    })
    .then(pirate=>response.json(pirate))
    .catch(err=>response.status(400).json(err))
}

// get all
module.exports.getAllPirates = (request, response) => {
    //sort from the db
    Pirate.find({}).sort({"name":1})
        .then(pirates => response.json(pirates))
        .catch(err=>response.json(err))
}


// get one
module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate=> response.json(pirate))
        .catch(err=>response.json(err))
}

//update
module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPirate=>response.json(updatedPirate))
        .catch(err=>response.status(400).json(err))
}

//delete
module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err=> response.json(err))
}