const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  getAllSweets,
  searchSweets,
  addSweet,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} = require("../controllers/sweetController");

router.get("/", getAllSweets);
router.get("/search", searchSweets);

router.post("/", auth, admin, addSweet);
router.put("/:id", auth, admin, updateSweet);
router.delete("/:id", auth, admin, deleteSweet);

router.post("/:id/purchase", auth, purchaseSweet);
router.post("/:id/restock", auth, admin, restockSweet);

module.exports = router;
