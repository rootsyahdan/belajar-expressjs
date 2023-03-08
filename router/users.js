const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller");

router
  .route("/users")
  .get(usercontroller.index)
  .post(usercontroller.store)
  .delete(usercontroller.delete);

router.put("/users/:id", usercontroller.update);

router.delete("/users/:userId", usercontroller.delete);

module.exports = router;
