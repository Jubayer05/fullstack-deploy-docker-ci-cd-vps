import cors from "cors";
import express from "express";

const app = express()

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    // add production url here
  ]
}));

// API route
app.get('/api/message', (req,res) => {
  res.json({message: 'Hello from Hitesh chai or code and Jubayer is learning full deployment'})
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})