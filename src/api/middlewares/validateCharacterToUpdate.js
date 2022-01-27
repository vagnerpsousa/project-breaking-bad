const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required().min(5).max(20),
  birthDay: Joi.string().isoDate().required(),
  img: Joi.string().required(),
  status: Joi.string().required().equal('Deceased','Alive'),
  nickName: Joi.string().required(),
  portrayed: Joi.string().required().min(5).max(20),
  
  
});

module.exports = async (req, _res, next) => {
  const { error } = schema.validate(req.body);
  
  if (error) return next(error);

  next();
};
