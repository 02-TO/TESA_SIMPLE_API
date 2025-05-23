const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON
app.use(express.json());


// Define routes
app.get('/', (req, res) => {
  res.send('you are now in a different territory');
});


app.get('/you', (req, res) => {
  res.send('now that you are here, this is owned by me Temiloluwa the greatest person alive!!!');

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
