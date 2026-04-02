const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Mock Disease Prediction
app.get("/predict", (req, res) => {
  res.json({
    disease: "Flu",
    probability: "78%",
    tip: "Drink water and take rest"
  });
});

// Mock Mental Health
app.get("/mental", (req, res) => {
  res.json({
    status: "Mild Stress",
    suggestion: "Try meditation"
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
