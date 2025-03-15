const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
  const hashedPassword = await bcrypt.hash('testpassword', 10);

  const users = [
    { email: 'test1@example.com', password: hashedPassword, name: 'Test User 1' },
    { email: 'test2@example.com', password: hashedPassword, name: 'Test User 2' },
    { email: 'test3@example.com', password: hashedPassword, name: 'Test User 3' },
    { email: 'test4@example.com', password: hashedPassword, name: 'Test User 4' },
  ];

  for (const user of users) {
    try {
      await prisma.userpr.create({
        data: user,
      });
      console.log(`Created user with email: ${user.email}`);
    } catch (error) {
      console.error(`Failed to create user with email: ${user.email}`, error);
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
