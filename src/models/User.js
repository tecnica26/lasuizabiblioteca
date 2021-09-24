const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: String,
		color: { type: String, default: '00635d' },
		likes: { type: [] },
	},
	{
		collection: 'users',
		timestamps: true,
	}
);
// encriptar contra
UserSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);
