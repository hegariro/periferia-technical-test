const jwt = require('jsonwebtoken');

class JwtService {
    async generateToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
    }

    async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}

module.exports = JwtService;
