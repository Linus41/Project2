const db = require("../../models");
const router = require("express").Router();

/**
 * Question - Read All
 */
router.get("/", function(req, res) {
  db.Question.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Question - Read One
 */
router.get("/:id", function(req, res) {
  db.Question.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;