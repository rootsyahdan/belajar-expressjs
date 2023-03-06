const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Syahdan", email: "syahdan@gmail.com" },
  { id: 2, name: "Fauzi", email: "fauzi@gmail.com" },
];

router
  .route("/users")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    users.push(req.body);
    res.send(req.body);
  });

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users.filter((user) => {
    if (user.id == id) {
      user.id = id;
      user.name = req.body.name;
      user.email = req.body.email;

      return user;
    }
  });
  res.json(users);
});

router.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  users = users.filter((user) => {
    if (user.id != userId) {
      return user;
    }
  });
  res.json(users);
});

module.exports = router;
