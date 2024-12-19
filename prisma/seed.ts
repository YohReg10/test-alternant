// Infos de ma BDD

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.activity.createMany({
    data: [
      {
        name: 'Nature en mouvement',
        type: 'canyoning',
        location: 'Montpellier',
        distance: 0,
        environment: 'Exterieur',
        url: 'https://nature-en-mouvement.com/',
      },
      {
        name: 'Alteo nature',
        type: 'canyoning',
        location: 'Prades-le-Lez',
        distance: 14.4,
        environment: 'Exterieur',
        url: 'https://www.alteo-nature.com/',
      },
      {
        name: 'Rock\'N River',
        type: 'canyoning',
        location: 'Saint Guilhem le Désert',
        distance: 52.2,
        environment: 'Exterieur',
        url: 'https://rocnriver.fr/',
      },
      {
        name: 'MadMonkey',
        type: 'escalade',
        location: 'Montpellier',
        distance: 0,
        environment: 'Interieur',
        url: 'https://madmonkey.fr/montpellier/',
      },
      {
        name: 'Fort Boyard',
        type: 'escape game',
        location: 'Montpellier',
        distance: 0,
        environment: 'Interieur',
        url: 'https://www.fortboyardaventures.fr',
      },
      {
        name: 'LOL - Escape Game',
        type: 'escape game',
        location: 'Montpellier',
        distance: 0,
        environment: 'Interieur',
        url: 'https://escapegame.lol',
      },
      {
        name: 'Rue des Vignerons',
        type: 'œnologie',
        location: 'Le Triadou',
        distance: 22.5,
        environment: 'Interieur',
        url: 'https://www.ruedesvignerons.com/fr/activite/4738/atelier-or-vert-et-rouge',
      },
      {
        name: 'Laser Game Evolution',
        type: 'laser game',
        location: 'Montpellier',
        distance: 0,
        environment: 'Interieur',
        url: 'https://montpellier.lasergame-evolution.fr',
      },
      {
        name: 'Illucity',
        type: 'realité virtuelle',
        location: 'Mauguio',
        distance: 16,
        environment: 'Interieur',
        url: 'https://illucity.fr/lieux/montpellier-realite-virtuelle',
      },
      {
        name: 'Volensud',
        type: 'parapente',
        location: 'Montpellier',
        distance: 0,
        environment: 'Exterieur',
        url: 'http://www.volensud.com/',
      },
      {
        name: 'Horizon Parapente',
        type: 'parapente',
        location: 'Saint-Mathieu-de-Trevier',
        distance: 24,
        environment: 'Exterieur',
        url: 'http://horizon-parapente.fr/',
      },
      {
        name: 'CDL Degustation',
        type: 'œnologie',
        location: 'Castelneau-le-Lez',
        distance: 7.2,
        environment: 'Interieur',
        url: 'https://cdldegustation.fr',
      },
      {
        name: 'Plongée Carnon',
        type: 'plongée',
        location: 'Carnon',
        distance: 15.4,
        environment: 'Exterieur',
        url: 'http://www.plongeecarnon.com/',
      },
    ],
  });
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
