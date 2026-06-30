const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS so your local HTML file can talk to this local server
app.use(cors());
// Enable parsing of JSON body data
app.use(express.json());

// API Endpoint to process contact submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Log transmission safely in the server console
  console.log(`[INCOMING MESSAGE]`);
  console.log(`From: ${name} (${email})`);
  console.log(`Contents: ${message}`);
  console.log(`---------------------------------`);

  // Respond back to the frontend
  res.status(200).json({
    status: "success",
    message: "Transmission successfully processed by the architecture.",
  });
});

app.listen(PORT, () => {
  console.log(
    `Portfolio server actively listening on http://localhost:${PORT}`,
  );
});
