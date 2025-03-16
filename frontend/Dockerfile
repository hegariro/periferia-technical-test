# Usar una imagen base compatible con npm@11.2.0
FROM node:20.17.0-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y prisma
COPY package*.json index.html ./
COPY public ./public/
COPY src ./src/

RUN npm install

COPY . .

EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
