const { httpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

const authMiddleware = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			httpError(res, 'NOT_TOKEN', 401);
			return;
		}

		const token = req.headers.authorization.split(' ').pop();
		const dataToken = await verifyToken(token);

		if (!dataToken._id) {
			httpError(res, 'ERROR_ID_TOKEN', 401);
			return;
		}

		next();
	} catch (err) {
		httpError(res, 'NOT_SESSION', 401);
	}
};

module.exports = { authMiddleware };
