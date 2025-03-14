# Usar una imagen base compatible con npm@11.2.0
FROM node:20.17.0-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y prisma
COPY package*.json .env server.js ./
COPY prisma ./prisma/
COPY src ./src/

# Instalar dependencias
RUN npm install pm2
RUN npm install

# Copiar el resto de los archivos
COPY . .

EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["sh", "launch.sh"]
