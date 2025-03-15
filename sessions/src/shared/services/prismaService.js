const { PrismaClient } = require('@prisma/client');

class PrismaService {
    constructor() {
        this.prisma = new PrismaClient({
            // Habilita logging para depuración
            log: ['query', 'info', 'warn', 'error']
          });
        this.validarConexion();
    }

    async init() {
        await this.prisma.$connect();
    }

    async validarConexion() {
        try {
          await this.prisma.$connect();
          console.log('Conexión exitosa a la base de datos');
        } catch (error) {
          console.error('Error al conectar:', error.message);
        }
    }
}

module.exports = new PrismaService();
