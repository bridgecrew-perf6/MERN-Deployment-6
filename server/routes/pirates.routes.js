const PiratesController = require("../controller/pirates.controller")

module.exports = function(app){
    app.post("/api/pirates", PiratesController.createPirate)
    app.get("/api/pirates", PiratesController.getAllPirates)
    app.get("/api/pirates/:id", PiratesController.getPirate)
    app.put("/api/pirates/:id", PiratesController.updatePirate)
    app.delete("/api/pirates/:id", PiratesController.deletePirate)
}

