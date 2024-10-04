const router = require('express').Router();
const apiRoutes = require('./api'); // Make sure you are importing the router

// All the API routes will be prefixed with `/api`
router.use('/api', apiRoutes);

module.exports = router;




