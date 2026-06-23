import { Prisma } from "@prisma/client";


// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const {
      roomId,
      checkIn,
      checkOut,
      guests,
      specialRequests,
    } = req.body;

    const userId = req.user.id;

    // verify room exists
    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        roomId,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests: Number(guests),
        specialRequests,
      },
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



// GET MY BOOKINGS
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: req.user.id,
      },

      include: {
        room: {
          include: {
            hotel: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// CANCEL BOOKING
export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: {
        id,
      },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await prisma.booking.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};