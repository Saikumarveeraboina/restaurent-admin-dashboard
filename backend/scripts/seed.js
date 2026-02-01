require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const MenuItem = require("../models/MenuItem");
const Order = require("../models/Order");

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await MenuItem.deleteMany();
    await Order.deleteMany();

    // Create menu items
    const menuItems = await MenuItem.insertMany([
      {
        name: "Paneer Butter Masala",
        category: "Main Course",
        price: 220,
        ingredients: ["Paneer", "Butter", "Tomato"],
      },
      {
        name: "Veg Manchurian",
        category: "Appetizer",
        price: 150,
      },
      {
        name: "Gulab Jamun",
        category: "Dessert",
        price: 90,
      },
      {
        name: "Cold Coffee",
        category: "Beverage",
        price: 120,
      },
    ]);

    // Create sample order
    await Order.create({
      items: [
        {
          menuItem: menuItems[0]._id,
          quantity: 2,
          price: 220,
        },
      ],
      totalAmount: 440,
      customerName: "Sai",
      tableNumber: 3,
      status: "Pending",
    });

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

seedData();
