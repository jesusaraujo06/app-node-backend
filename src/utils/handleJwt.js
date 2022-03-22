const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Firmar
 * @param {*} user object
 */
const tokenSign = async user => {
	const sign = await jwt.sign(
		{
			_id: user.id,
			role: 'user',
		},
		JWT_SECRET,
		{
			expiresIn: '2h',
		}
	);

	return sign;
};

/**
 * Verificar la firma
 * @param {*} tokenJwt
 * @returns
 */
const verifyToken = async tokenJwt => {
	try {
		return jwt.verify(tokenJwt, JWT_SECRET);
	} catch (err) {
		return null;
	}
};

module.exports = {
	tokenSign,
	verifyToken,
};
