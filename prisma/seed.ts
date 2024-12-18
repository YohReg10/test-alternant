import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.activity.createMany({
    data: [
      {
        name: "Nature en mouvement",
        type: "canyoning",
        location: "Montpellier",
        distance: 0,
        environment: "Exterieur",
        url: "https://nature-en-mouvement.com/",
      },
      {
        name: "Alteo nature",
        type: "canyoning",
        location: "Prades-le-Lez",
        distance: 14.4,
        environment: "Exterieur",
        url: "https://www.alteo-nature.com/",
      },
      {
        name: "Rock'N River",
        type: "canyoning",
        location: "Saint Guilhem le Désert",
        distance: 52.2,
        environment: "Exterieur",
        url: "https://rocnriver.fr/",
      },
      {
        name: "MadMonkey",
        type: "escalade",
        location: "Montpellier",
        distance: 0,
        environment: "Interieur",
        url: "https://madmonkey.fr/montpellier/",
      },
      // Ajoute ici les autres entrées de ton tableau
    ],
  });
  console.log("Données insérées avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
