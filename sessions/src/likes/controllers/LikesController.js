
class LikesController {
    constructor(prismaService) {
        this.prisma = prismaService.prisma;
    }

    async getLikes(req, res) {
        try {
            const answerLikes = await this.prisma.likespr.groupBy({
                by: ['publication'],
                _count: { id: true },
                take: 100, 
                orderBy: { publication: 'asc' },
            });
            if (!answerLikes && Array.isArray(answerLikes) && !answerLikes.length) {
                res.status(404).json({ errorMessage: 'Publications without likes' });
            }
            const publicationLikes = answerLikes.map((item) => ({
                publicationId: item.publication,
                likesCount: item._count.id,
            }));
            res.status(200).json({ publicationLikes });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Has an error' });
        }
    }

    async getLikesByUser(req, res) {
        try {
            const { userId } = req.user;
            const answerLikes = await this.prisma.likespr.groupBy({
                by: ['publication'],
                _count: { id: true },
                orderBy: { publication: 'asc' },
                where: { user: userId },
            });
            if (!answerLikes && Array.isArray(answerLikes) && !answerLikes.length) {
                res.status(404).json({ errorMessage: 'Publications without likes' });
            }
            const publicationLikes = answerLikes.map((item) => ({
                publicationId: item.publication,
                likesCount: item._count.id,
            }));
            res.status(200).json({ publicationLikes });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Has an error' });
        }
    }

    async setLike(req, res) {
        try {
            const { userId } = req.user;
            const { publicationId } = req.body;
            const likes = await this.prisma.likespr.create({
                data: { publication: publicationId, user: userId }
            });
            res.status(201).json({ likes });
        } catch (error) {
            console.error('Error detallado:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = LikesController;
