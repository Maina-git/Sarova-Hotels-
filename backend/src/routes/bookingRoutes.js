import express from "express";

import {
  createBooking,
  getMyBookings,
  cancelBooking,
} from  "../controllers/BookingController.js";

import { protect } from  "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBooking);

router.get("/my-bookings", protect, getMyBookings);

router.delete("/:id", protect, cancelBooking);

export default router;