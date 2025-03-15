const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const publication = [
    { publisher: 1, title: 'Title Uno', content: 'Publicación Uno' },
    { publisher: 2, title: 'Title Dos', content: 'Publicación Dos' },
    { publisher: 3, title: 'Title Tres', content: 'Publicación Tres' },
    { publisher: 4, title: 'Title Cuatro', content: 'Publicación Cuatro' },
  ];

  for (const p of publication) {
    try {
      await prisma.publicationpr.create({
        data: p,
      });
      console.log(`Created publication with title: ${p.title}`);
    } catch (error) {
      console.error(`Failed to create publication with title: ${p.title}`, error);
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
