const { StatusCodes } = require('http-status-codes');
const characterService = require('../services/characterService');

module.exports = async (req, _res, next) => {
  const character = await characterService.getById(req.params.id);

  if (!character) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Character does not exist',
    });
  };

  next();
};
