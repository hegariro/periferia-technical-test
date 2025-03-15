#!/bin/sh

npx prisma migrate dev --name initial
npx prisma migrate deploy
npx prisma generate

npm run seed
npm run start
