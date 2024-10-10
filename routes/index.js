const router = require('express').Router();
const apiRoutes = require('./api'); // This should point to your `api` folder

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>Wrong Route!</h1>');
});

module.exports = router;




