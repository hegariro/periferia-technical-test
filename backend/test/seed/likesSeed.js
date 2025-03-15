const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const likes = [
    { publication: 1, user: 1 },
    { publication: 2, user: 1 },
    { publication: 3, user: 1 },
    { publication: 4, user: 1 },
    { publication: 2, user: 2 },
    { publication: 3, user: 2 },
    { publication: 4, user: 2 },
    { publication: 3, user: 3 },
    { publication: 4, user: 3 },
    { publication: 4, user: 4 },
  ];

  for (const l of likes) {
    try {
      await prisma.likespr.create({
        data: l,
      });
      console.log(`Created like from user: ${l.user} for publication: ${l.publication}`);
    } catch (error) {
      console.error(`Failed to create like from user: ${l.user} for publication: ${l.publication}`, error);
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
