const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let expenses = [];
let currentId = 1;

// Get all expenses
app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

// Add expense
app.post("/api/expenses", (req, res) => {
  const { description, amount, category } = req.body;

  if (!description || !amount) {
    return res.status(400).json({ message: "description and amount are required" });
  }

  const expense = {
    id: currentId++,
    description,
    amount: Number(amount),
    category: category || "General",
    createdAt: new Date().toISOString()
  };

  expenses.push(expense);
  res.status(201).json(expense);
});

// Delete expense
app.delete("/api/expenses/:id", (req, res) => {
  const id = Number(req.params.id);
  expenses = expenses.filter(e => e.id !== id);
  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send("Expense Backend API is running");
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
