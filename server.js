const express = require('express');
const routes = require('./routes'); // This should point to your routes directory
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your API routes
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


