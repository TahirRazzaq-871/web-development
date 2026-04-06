// ===== EXPRESS SERVER SETUP =====
// This is the main server file that runs the Express application

// Import the Express framework
const express = require('express');

// Initialize the Express app
const app = express();

// Set the port for the server to listen on
// Use environment variable PORT if available, otherwise use port 3000
const PORT = process.env.PORT || 3000;

// ===== CONFIGURE VIEW ENGINE =====
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory (where EJS templates are stored)
app.set('views', __dirname + '/views');

// ===== SERVE STATIC FILES =====
// Tell Express where to find static files (CSS, JS, images)
// These will be served directly from the public folder
app.use(express.static(__dirname + '/public'));

// ===== ROUTES =====

// Home route - renders the index.ejs template
app.get('/', (req, res) => {
  // res.render() sends the EJS template to the browser
  // The template will be compiled to HTML
  res.render('index', {
    title: 'SERVIS Shoes – Summer Sale'
  });
});

// ===== ERROR HANDLING =====

// 404 Not Found route - catches all unmatched routes
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found'
  });
});

// ===== START SERVER =====
// Listen on the specified PORT
app.listen(PORT, () => {
  console.log(`\n✅ Server is running on http://localhost:${PORT}\n`);
  console.log('Press Ctrl+C to stop the server.\n');
});
