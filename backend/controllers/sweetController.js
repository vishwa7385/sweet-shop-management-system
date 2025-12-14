const Sweet = require("../models/Sweet");

/* GET all sweets */
exports.getAllSweets = async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
};

/* SEARCH sweets */
exports.searchSweets = async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;

  let query = {};

  if (name) query.name = { $regex: name, $options: "i" };
  if (category) query.category = { $regex: category, $options: "i" };
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  const sweets = await Sweet.find(query);
  res.json(sweets);
};

/* ADD sweet (ADMIN) */
exports.addSweet = async (req, res) => {
  const { name, category, price, quantity } = req.body;

  const sweet = await Sweet.create({
    name,
    category,
    price,
    quantity,
  });

  res.status(201).json(sweet);
};

/* UPDATE sweet (ADMIN) */
exports.updateSweet = async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(sweet);
};

/* DELETE sweet (ADMIN) */
exports.deleteSweet = async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
};

/* PURCHASE sweet */
exports.purchaseSweet = async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);

  if (!sweet || sweet.quantity <= 0) {
    return res.status(400).json({ message: "Out of stock" });
  }

  sweet.quantity -= 1;
  await sweet.save();

  res.json(sweet);
};

/* RESTOCK sweet (ADMIN) */
exports.restockSweet = async (req, res) => {
  const { quantity } = req.body;

  const sweet = await Sweet.findById(req.params.id);
  sweet.quantity += quantity || 5;
  await sweet.save();

  res.json(sweet);
};
