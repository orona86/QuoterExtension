const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable requests from the Chrome extension

// Sample list of quotes
const quotes = [
    "Believe in yourself!",
    "You can do it!",
    "Never give up!",
    "Dream big, work hard!",
    "Success is a journey, not a destination."
];

// API endpoint to get a random quote
app.get("/quote", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
 
