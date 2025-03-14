const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const publication = [
    { publisher: 1, title: 'TestUno', content: 'Publicación Uno' },
    { publisher: 2, title: 'TestDos', content: 'Publicación Dos' },
    { publisher: 3, title: 'TestTres', content: 'Publicación Tres' },
    { publisher: 4, title: 'TestCuatro', content: 'Publicación Cuatro' },
  ];

  for (const p of publication) {
    try {
      await prisma.publicationpr.create({
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
