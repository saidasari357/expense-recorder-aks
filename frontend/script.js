const API_BASE = window.BACKEND_URL || "http://localhost:4000";

const form = document.getElementById("expense-form");
const tableBody = document.querySelector("#expenses-table tbody");

async function fetchExpenses() {
  const res = await fetch(`${API_BASE}/api/expenses`);
  const data = await res.json();
  renderExpenses(data);
}

function renderExpenses(expenses) {
  tableBody.innerHTML = "";
  expenses.forEach(e => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${e.id}</td>
      <td>${e.description}</td>
      <td>${e.amount}</td>
      <td>${e.category}</td>
      <td>${new Date(e.createdAt).toLocaleString()}</td>
      <td><button data-id="${e.id}" class="delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(tr);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  await fetch(`${API_BASE}/api/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description, amount, category })
  });

  form.reset();
  fetchExpenses();
});

tableBody.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-id");
    await fetch(`${API_BASE}/api/expenses/${id}`, { method: "DELETE" });
    fetchExpenses();
  }
});

fetchExpenses();
