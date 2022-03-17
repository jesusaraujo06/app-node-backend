const httpError = (res, err) => {
	res.status(500);
	res.send({ error: 'Algo ocurrio' });
};
