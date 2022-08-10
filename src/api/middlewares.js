/*
import * as jwt from 'jsonwebtoken';
import pkg from 'config';
const { JWT_SECRET } = pkg;
import logger from 'logger';

const preLogApi = (req, res, next) => {
    logger.createLogger({
        message: 'request to backend',
        method: req.method,
        ip: req.ip,
        endpoint: req.originalUrl
    });
    next();
};

const tokenValidation = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

const authMiddleware = (userTypes) => (req, res, next) => {
    if (!Array.isArray(userTypes)) userTypes = [userTypes];
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    try {
        if (!token) {
            throw new AuthenticationError('No token found');
        }
        const decoded = tokenValidation(token);
        if (!decoded) {
            throw new AuthenticationError('Couldnt verify token');
        }
        req.userDecoded = decoded;
    } catch (err) {
        next(err);
    } finally {
        next();
    }
};

const clientErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.status).send(err.message);
    logger.error(err.message);
};

export {
    preLogApi,
    clientErrorHandler,
    authMiddleware
};
*/