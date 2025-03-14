const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
  const profiles = [
    { id: 1, nickname: 'TestUno', profileImage: 'https://robohash.org/S0H.png?set=set4' },
    { id: 2, nickname: 'TestDos', profileImage: 'https://robohash.org/E1C.png?set=set4' },
    { id: 3, nickname: 'TestTres', profileImage: 'https://robohash.org/3QQ.png?set=set4' },
    { id: 4, nickname: 'TestCuatro', profileImage: 'https://robohash.org/kS5.png?set=set4' },
  ];

  for (const p of profiles) {
    try {
      await prisma.profilepr.create({
        data: p,
      });
      console.log(`Created profile with nickname: ${p.nickname}`);
    } catch (error) {
      console.error(`Failed to create user with email: ${p.nickname}`, error);
    }
  }

  console.log('Seeding completed.');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
