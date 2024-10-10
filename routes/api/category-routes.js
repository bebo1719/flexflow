const router = require('express').Router();
const { Category, Product } = require('../../models'); // Adjust according to your setup

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Other category routes here...

module.exports = router;



