import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.activity.createMany({
    data: [
      {
        name: 'Nature en mouvement',
        type: 'canyoning',
        location: 'Montpellier',
        distance: '0',
        environment: 'Exterieur',
        sensation: 2,
        url_site: 'https://nature-en-mouvement.com/',
        url_img: 'https://nature-en-mouvement.com/wp-content/uploads/2017/02/Journee-Koh-Lanta-big.jpg'
      },
      {
        name: 'Alteo nature',
        type: 'canyoning',
        location: 'Prades-le-Lez',
        distance: '14,4',
        environment: 'Exterieur',
        sensation: 2,
        url_site: 'https://www.alteo-nature.com/',
        url_img: 'https://www.alteo-nature.com/media/galerie_photo/galerie-1/canyon-saintguilhemledesert-saut.jpg'
      },
      {
        name: 'MadMonkey',
        type: 'escalade',
        location: 'Montpellier',
        distance: '0',
        environment: 'Interieur',
        sensation: 2,
        url_site: 'https://madmonkey.fr/montpellier/',
        url_img: 'https://madmonkey.fr/wp-content/uploads/2021/01/stage-madmonkey.jpg'
      },
      {
        name: 'Fort Boyard',
        type: 'escape game',
        location: 'Montpellier',
        distance: '0',
        environment: 'Interieur',
        sensation: 1,
        url_site: 'https://www.fortboyardaventures.fr',
        url_img: 'https://www.fortboyardaventures.fr/wp-content/uploads/2024/11/Pere-Fourras-min-1.jpg'
      },
      {
        name: 'LOL - Escape Game',
        type: 'escape game',
        location: 'Montpellier',
        distance: '0',
        environment: 'Interieur',
        sensation: 1,
        url_site: 'https://escapegame.lol',
        url_img: 'https://escapegame.lol/wp-content/uploads/2023/03/Supreme_Chancellor_Sith.webp'
      },
      {
        name: 'Rue des Vignerons',
        type: 'œnologie',
        location: 'Le Triadou',
        distance: '22,5',
        environment: 'Interieur',
        sensation: 0,
        url_site: 'https://www.ruedesvignerons.com/fr/activite/4738/atelier-or-vert-et-rouge',
        url_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJK9oaGV_7pFDbsFHBq6HOsxm0F2sby5GLSQ&s'
      },
      {
        name: 'Laser Game Evolution',
        type: 'laser game',
        location: 'Montpellier',
        distance: '0',
        environment: 'Interieur',
        sensation: 1,
        url_site: 'https://montpellier.lasergame-evolution.fr',
        url_img: 'http://lasergame-evolution.com/wp-content/uploads/2024/06/lasergame-500x500-1.png'
      },
      {
        name: 'Illucity',
        type: 'réalité virtuelle',
        location: 'Mauguio',
        distance: '16',
        environment: 'Interieur',
        sensation: 0,
        url_site: 'https://illucity.fr/lieux/montpellier-realite-virtuelle',
        url_img: 'https://res.cloudinary.com/forescape/image/upload/f_auto,ar_16:9,w_1024,c_fill,g_center/srt7v753eax4puju6axo'
      },
      {
        name: 'Volensud',
        type: 'parapente',
        location: 'Montpellier',
        distance: '0',
        environment: 'Exterieur',
        sensation: 3,
        url_site: 'http://www.volensud.com/',
        url_img: 'https://www.volensud.com/img/logo_volensud.png'
      },
      {
        name: 'Horizon Parapente',
        type: 'parapente',
        location: 'Saint-Mathieu-de-Trevier',
        distance: '24',
        environment: 'Exterieur',
        sensation: 3,
        url_site: 'http://horizon-parapente.fr/',
        url_img: 'http://horizon-parapente.fr/images/img1_1080.jpg'
      },
      {
        name: 'CDL Degustation',
        type: 'œnologie',
        location: 'Castelneau-le-Lez',
        distance: '7,2',
        environment: 'Interieur',
        sensation: 0,
        url_site: 'https://cdldegustation.fr',
        url_img: 'https://cdldegustation.fr/wp-content/uploads/2017/11/cpages-e1516891862226-330x260.jpg'
      },
      {
        name: 'Plongée Carnon',
        type: 'plongée',
        location: 'Carnon',
        distance: '15,4',
        environment: 'Exterieur',
        sensation: 1,
        url_site: 'http://www.plongeecarnon.com/',
        url_img: 'https://www.plongeecarnon.com/wp-content/uploads/2020/11/plongee-enfant-scaled.jpg'
      },
      {
        name: 'RockN River',
        type: 'canyoning',
        location: 'Saint Guilhem le Désert',
        distance: '52,2',
        environment: 'Exterieur',
        sensation: 2,
        url_site: 'https://rocnriver.fr/',
        url_img: 'https://rocnriver.fr/wp-content/uploads/2022/05/resize-activites.png'
      }
    ]
  })

  console.log('Data has been added to the database')
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
