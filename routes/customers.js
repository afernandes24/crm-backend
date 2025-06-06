const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Pobierz wszystkich klientów
router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Pobierz klienta po ID
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

// Dodaj nowego klienta
router.post("/", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
});

// Edytuj klienta po ID
router.put("/:id", async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Usuń klienta po ID
router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// Dodaj usługę (service) do klienta po ID
router.post("/:id/services", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer)
      return res.status(404).json({ error: "Klient nie znaleziony" });

    // Dodajemy nową usługę do tablicy services
    customer.services.push(req.body);

    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
