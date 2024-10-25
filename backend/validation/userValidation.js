const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'user').default('user')
});

const validateUser = (data) => {
    return userSchema.validate(data);
};

module.exports = { validateUser };
