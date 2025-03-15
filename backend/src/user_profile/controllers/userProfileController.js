
class UserProfileController {
    constructor(prismaService) {
        this.prisma = prismaService.prisma;
    }

    async getProfile(req, res) {
        try {
            const { userId } = req.user;
            const profile = await this.prisma.profilepr.findUnique({
                where: { id: userId }
            });
            if (!profile) {
                res.status(404).json({ errorMessage: 'Profile not found' });
            }
            res.status(200).json({ profile });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Error, session not inicialized' });
        }
    }

    async setProfile(req, res) {
        try {
            const { userId: id } = req.user;
            const { nickname, profileImage } = req.body;
            const profile = await this.prisma.profilepr.create({
                data: { id, nickname, profileImage }
            });
            res.status(201).json({ profile });
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserProfileController;
