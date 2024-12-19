// Création API

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

// Instancie PrismaClient
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Récupère toutes les activités depuis la base de données
      const activities = await prisma.activity.findMany()
      // Renvoie les données sous forme de JSON
      res.status(200).json(activities)
    } catch (error) {
      // En cas d'erreur, renvoie une erreur avec le statut 500
      res.status(500).json({ error: 'Failed to fetch activities' })
    }
  } else {
    // Si la méthode n'est pas GET, renvoie une erreur "Method Not Allowed"
    res.status(405).json({ error: 'Method not allowed' })
  }
}