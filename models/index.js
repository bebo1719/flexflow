// import models
const Product = require('./product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./productTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

