const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const characterService = require('../services/characterService');
const { validateCharacterToCreate, validateCharacterToUpdate, doesCharacterExists } = require('../middlewares');
const { GetCharacterByName } = require('../utils/breakingBadApi');
const GetEpisodesByCharacter = require('../utils/getEpisodesByCharacter');


router.post('/', validateCharacterToCreate, async (req, res, next) => {
  try {
    const characterData = await GetCharacterByName(req.body.name);

    const characterEpisodes = await GetEpisodesByCharacter(characterData[0].name)

    const registeredCharacter = await characterService.create(characterData[0], characterEpisodes);

    const aux = await characterService.getById(registeredCharacter.id)

    res.status(StatusCodes.CREATED).json(aux);
  } catch (error) {

    next(error)
  }
});

router.get('/', async (_req, res, next) => {
  const characters = await characterService.getAll();

  if (characters.length === 0) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No character registrations',
    });
  }

  return res.status(StatusCodes.OK).json(characters);
});

router.get('/:id', doesCharacterExists, async (req, res, _next) => {
  const character = await characterService.getById(req.params.id);

  return res.status(StatusCodes.OK).json(character);
});

router.put('/:id', doesCharacterExists, validateCharacterToUpdate, async (req, res, _next) => {
  const { id } = req.params;

  const updatedCharacter = await characterService.updateById(id, req.body);

  return res.status(StatusCodes.OK).json(updatedCharacter);
});


router.delete('/:id', doesCharacterExists, async (req, res, _next) => {
  const { id } = req.params;

  const character = await characterService.getById(id);

  const characterEpisodes = await GetEpisodesByCharacter(character.name)

  await characterService.deleteById(id, characterEpisodes);

  return res.status(StatusCodes.NO_CONTENT).json({ message: 'Character was deleted' });
});

module.exports = router;