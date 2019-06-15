const { Router } = require("express");
const cors = require("cors");
const controller = require("./todo.controller");
const router = new Router();

router.post("/", cors(), controller.createTask);
router.post("/delete", controller.deleteTask);

module.exports = router;
