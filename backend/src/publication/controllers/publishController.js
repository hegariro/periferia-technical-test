
class PublishController {
    constructor(prismaService) {
        this.prisma = prismaService.prisma;
    }

    async getAllPublications (req, res) {
        try {
            const publications = await this.prisma.publicationpr.findMany({
                orderBy: { createdAt: 'desc' },
                take: 100, 
            });
            if (!publications && Array.isArray(publications) && !publications.length) {
                res.status(404).json({ errorMessage: 'Publications not found' });
            }
            res.status(200).json({ publications });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Have an error, ' + error.message });
        }
    }

    async getAllPublicationsByUser (req, res) {
        try {
            const { userId } = req.user;
            const publications = await this.prisma.publicationpr.findMany({
                where: { publisher: userId },
            });
            if (!publications && Array.isArray(publications) && !publications.length) {
                res.status(404).json({ errorMessage: 'Publications not found' });
            }
            res.status(200).json({ publications });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Have an error, ' + error.message });
        }
    }

    async getPublicationById (req, res) {
        try {
            const { userId } = req.user;
            const publicationId = parseInt(req.params.id);
            const publication = await this.prisma.publicationpr.findUnique({
                where: { id: publicationId, publisher: userId },
            });
            if (!publication) {
                res.status(404).json({ errorMessage: 'Publication not found' });
            }
            res.status(200).json({ publication });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Have an error, ' + error.message });
        }
    }

    async setPublication (req, res) {
        try {
            const { userId } = req.user;
            const { title, content } = req.body;
            const publication = await this.prisma.publicationpr.create({
                data: { title, publisher: userId, content }
            });
            if (!publication) {
                res.status(500).json({ errorMessage: 'Publication was not created' });
            }
            res.status(201).json({ publication });
        } catch (error) {
            console.error('Details errors: ', error);
            res.status(500).json({ error: 'Have an error, ' + error.message });
        }
    }
}

module.exports = PublishController;
