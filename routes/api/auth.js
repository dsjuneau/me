const router = require("express").Router();
const usersController = require("../../controllers/usersController");
router.route("/").get((req, res) => {
  res.json({ sucess: true });
});
module.exports = router;
