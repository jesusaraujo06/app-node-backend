const models = {
	userModel: import('./sql/user.js'),
	storageModel: import('./sql/storage.js'),
};

export default models;
