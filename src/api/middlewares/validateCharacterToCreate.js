const Joi = require('joi');
const { GetCharacterByName } = require('../utils/breakingBadApi');
const { StatusCodes } = require('http-status-codes');
const characterService = require('../services/characterService');

const schema = Joi.object({
  name: Joi.string().required(),
});

module.exports = async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next(error);

  const characterData = await GetCharacterByName(req.body.name);

  if (characterData.length === 0)
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Character does not exist'
    });

  if (characterData.length > 1)
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Inform the full name'
    });

  const characterExists = await characterService.getByName(characterData[0].name)
  if (characterExists)
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Character is already registered'
    });

  next();
};

