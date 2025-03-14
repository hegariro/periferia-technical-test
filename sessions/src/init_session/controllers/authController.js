const bcrypt = require('bcryptjs');

class AuthController {
    constructor(prismaService, jwtService) {
        this.prisma = prismaService.prisma;
        this.jwtService = jwtService;
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await this.prisma.userpr.findUnique({ where: { email } });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ error: "Credenciales inválidas" });
            }
            const token = await this.jwtService.generateToken({ userId: user.id });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: "Error al iniciar sesión" });
        }
    }

    async register(req, res) {
        try {
            const { email, password, name } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await this.prisma.userpr.create({
                data: { email, password: hashedPassword, name }
            });
            res.status(201).json(user);
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(500).json({ error: error.message });
        }
    }

    async logout(req, res) {
        try {
            this.prisma.close();
            res.status(204);
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = AuthController;
