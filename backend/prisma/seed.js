import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.createMany({
    data: [
      {
        name: "Sarova Stanley",
        location: "Nairobi",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        description:
          "A luxury hotel located in the heart of Nairobi offering world-class hospitality.",
        gallery: [],
        startingPrice: 15000,
        rating: 4.8,
        reviewCount: 1254,
        amenities: ["WiFi", "Pool", "Gym", "Spa"],
      },

      {
        name: "Sarova Whitesands Beach Resort & Spa",
        location: "Mombasa",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        description:
          "An award-winning beachfront resort overlooking the Indian Ocean.",
        gallery: [],
        startingPrice: 18000,
        rating: 4.9,
        reviewCount: 2310,
        amenities: ["Beach Access", "Pool", "Restaurant", "Spa"],
      },

      {
        name: "Sarova Mara Game Camp",
        location: "Maasai Mara",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        description:
          "Experience luxury safari adventures in the world-famous Maasai Mara.",
        gallery: [],
        startingPrice: 22000,
        rating: 4.9,
        reviewCount: 1876,
        amenities: ["Safari Tours", "WiFi", "Restaurant"],
      },

      {
        name: "Sarova Woodlands Hotel & Spa",
        location: "Nakuru",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
        description:
          "A contemporary hotel designed for comfort, leisure and business travelers.",
        gallery: [],
        startingPrice: 14000,
        rating: 4.7,
        reviewCount: 987,
        amenities: ["WiFi", "Gym", "Conference Rooms"],
      },

      {
        name: "Sarova Lion Hill Game Lodge",
        location: "Lake Nakuru",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        description:
          "Premium safari lodge with breathtaking views of Lake Nakuru.",
        gallery: [],
        startingPrice: 20000,
        rating: 4.8,
        reviewCount: 1450,
        amenities: ["Pool", "Safari Tours", "Restaurant"],
      },

      {
        name: "Sarova Panafric",
        location: "Nairobi",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        description:
          "A modern city hotel blending luxury, comfort and African heritage.",
        gallery: [],
        startingPrice: 16000,
        rating: 4.6,
        reviewCount: 1120,
        amenities: ["WiFi", "Spa", "Gym"],
      },

      {
        name: "Sarova Imperial Hotel",
        location: "Kisumu",
        image: "https://images.unsplash.com/photo-1455587734955-081b22074882",
        description:
          "Elegant accommodation in the lakeside city of Kisumu.",
        gallery: [],
        startingPrice: 12000,
        rating: 4.5,
        reviewCount: 764,
        amenities: ["WiFi", "Restaurant"],
      },

      {
        name: "Sarova Shaba Game Lodge",
        location: "Samburu",
        image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
        description:
          "Luxury lodge surrounded by dramatic landscapes and wildlife.",
        gallery: [],
        startingPrice: 21000,
        rating: 4.8,
        reviewCount: 980,
        amenities: ["Safari Tours", "Pool", "WiFi"],
      },

      {
        name: "Sarova Salt Lick Game Lodge",
        location: "Tsavo",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        description:
          "Unique elevated lodge overlooking a busy wildlife waterhole.",
        gallery: [],
        startingPrice: 25000,
        rating: 4.9,
        reviewCount: 1754,
        amenities: ["Safari Tours", "Restaurant", "WiFi"],
      },

      {
        name: "Sarova Maiyan",
        location: "Nanyuki",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        description:
          "Luxury retreat offering stunning views of Mount Kenya.",
        gallery: [],
        startingPrice: 19500,
        rating: 4.7,
        reviewCount: 840,
        amenities: ["Pool", "Gym", "Spa"],
      },

      {
        name: "Sarova Taita Hills Game Lodge",
        location: "Tsavo",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        description:
          "A peaceful safari lodge surrounded by wildlife and scenic landscapes.",
        gallery: [],
        startingPrice: 17000,
        rating: 4.8,
        reviewCount: 1330,
        amenities: ["Safari Tours", "Restaurant"],
      },

      {
        name: "Sarova Voyager Beach Resort",
        location: "Mombasa",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        description:
          "A family-friendly beachfront resort with world-class entertainment.",
        gallery: [],
        startingPrice: 19000,
        rating: 4.8,
        reviewCount: 2680,
        amenities: ["Beach Access", "Pool", "Spa", "Restaurant"],
      },
    ],
  });

  console.log("Hotels seeded successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });