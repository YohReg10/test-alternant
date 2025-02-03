import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Instancie PrismaClient
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      console.log("Testing Prisma connection...");
      await prisma.$connect(); // Teste la connexion à la BDD
      console.log("Prisma connected successfully.");
      
      console.log("Fetching activities...");
      const activities = await prisma.activity.findMany({
        select: {
          id: true,
          name: true,
          type: true,
          location: true,
          distance: true,
          environment: true,
          sensation: true,
          url_site: true,
          url_img: true,
        }
      });

      if (Array.isArray(activities)) {
        console.log("Activities fetched successfully", activities);
        res.status(200).json(activities);
      } else {
        console.error("Activities is not an array", activities);
        res.status(500).json({ error: 'Unexpected response format' });
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
      res.status(500).json({ error: 'Failed to fetch activities', details: error.message });
    } finally {
      await prisma.$disconnect(); // Ferme la connexion à Prisma après usage
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
