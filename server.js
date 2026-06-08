import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
     res.status(200).json({
       message : "Hello from DevOps Bootcamp V2"
  })
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
       timestamp: new Date(),
    message: 'Server is healthy and running smoothly'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});