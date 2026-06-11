import prisma from "../config/db.js";

export const createHotel = async (req, res) => {
  try {
    const {
      name,
      location,
      description,
      image,
      gallery,
      startingPrice,
      amenities,
    } = req.body;

    const hotel = await prisma.hotel.create({
      data: {
        name,
        location,
        description,
        image,
        gallery,
        startingPrice,
        amenities,
      },
    });

    res.status(201).json({
      success: true,
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getHotels = async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        rooms: true, // optional: removes need for extra request later
      },
    });

    res.status(200).json({
      success: true,
      count: hotels.length,
      hotels,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
















