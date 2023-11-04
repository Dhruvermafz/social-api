const router = require("express").Router();
const jwt = require("../middleware/auth");
const notifyCtrl = require("../controllers/notifyController");

router.post("/notify", jwt, notifyCtrl.createNotify);

router.delete("/notify/:id", jwt, notifyCtrl.removeNotify);

router.get("/notifies", jwt, notifyCtrl.getNotifies);

router.patch("/isReadNotify/:id", jwt, notifyCtrl.isReadNotify);

router.delete("/deleteAllNotify", jwt, notifyCtrl.deleteAllNotifies);

module.exports = router;
