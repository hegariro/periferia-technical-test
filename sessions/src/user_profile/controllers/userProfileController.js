
class UserProfileController {
    constructor(prismaService) {
        this.prisma = prismaService.prisma;
    }

    async getProfile(req, res) {}

    async setProfile(req, res) {

    }
}

module.exports = UserProfileController;
