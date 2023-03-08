const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Syahdan", email: "syahdan@gmail.com" },
  { id: 2, name: "Fauzi", email: "fauzi@gmail.com" },
];

router
  .route("/users")
  .get((req, res) => {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "Data Masih Kosong",
      });
    }
    res.json(users);
  })
  .post((req, res) => {
    users.push(req.body);
    res.send({
      status: true,
      data: users,
      message: "Data Berhasil Ditambahkan",
      method: req.method,
      url: req.url,
    });
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
  res.json({
    status: true,
    data: users,
    message: "Data Berhasil Diubah",
    method: req.method,
    url: req.url,
  });
});

router.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  users = users.filter((user) => {
    if (user.id != userId) {
      return user;
    }
  });
  res.json({
    status: true,
    data: users,
    message: "Data Berhasil Dihapus",
    method: req.method,
    url: req.url,
  });
});

module.exports = router;
