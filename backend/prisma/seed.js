import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.createMany({
    data: [
      {
        name: "Sarova Stanley",
        location: "Nairobi",
        description: "Luxury hotel in Nairobi CBD",
        image: "https://example.com/stanley.jpg",
        gallery: [
          "https://example.com/stanley1.jpg",
          "https://example.com/stanley2.jpg",
        ],
        startingPrice: 15000,
        rating: 4.8,
        reviewCount: 1200,
        amenities: ["WiFi", "Pool", "Gym", "Spa"],
      },
      {
        name: "Sarova Whitesands",
        location: "Mombasa",
        description: "Beachfront resort with ocean views",
        image: "https://example.com/whitesands.jpg",
        gallery: [
          "https://example.com/ws1.jpg",
          "https://example.com/ws2.jpg",
        ],
        startingPrice: 18000,
        rating: 4.7,
        reviewCount: 980,
        amenities: ["Beach Access", "WiFi", "Pool", "Restaurant"],
      },
      {
        name: "Sarova Mara Camp",
        location: "Masai Mara",
        description: "Luxury safari camp in the wild",
        image: "https://example.com/mara.jpg",
        gallery: [
          "https://example.com/mara1.jpg",
          "https://example.com/mara2.jpg",
        ],
        startingPrice: 22000,
        rating: 4.9,
        reviewCount: 1500,
        amenities: ["Safari Tours", "WiFi", "Restaurant"],
      },
    ],
  });

  console.log("Hotels seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });