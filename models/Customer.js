const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  vehicleModel: String,
  price: Number,
  date: Date,
});

const customerSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
      street: String,
      city: String,
      zip: String,
    },
    notes: String,
    services: [serviceSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
