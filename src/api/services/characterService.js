const { Character, Episode, CharacterEpisode } = require('../../database/models');
const character = require('../../database/models/character');

const createEpisode = async (episodeData) => {
  const { title, season, episode, air_date, series } = episodeData;
  const episodeExists = await Episode.findOne({ where: { title } });
  if (episodeExists) {
    return episodeExists.id;
  } else {
    const newEpisode = await Episode.create({ title, season, episode, air_date, series });
    return newEpisode.id;
  };
};

const createCharacterEpisode = async (characterId, episodeId) => {
  await CharacterEpisode.create({ characterId, episodeId });
};

const create = async (characterData, characterEpisodes) => {
  const {
    name,
    birthday: birth_day,
    img,
    status,
    nickname: nick_name,
    portrayed
  } = characterData;

  const newCharacter = await Character.create({ name, birth_day, img, status, nick_name, portrayed });

  characterEpisodes.forEach(async (episode) => {
    const newEpisodeId = await createEpisode(episode);
    await createCharacterEpisode(newCharacter.id, newEpisodeId);
  });

  return newCharacter;
};

const updateById = async (id, body) => {
  const {
    name,
    birthDay: birth_day,
    img,
    status,
    nickname: nick_name,
    portrayed } = body

  await Character.update({ name, birth_day, img, status, nick_name, portrayed }, { where: { id } });

  const updatedCharacter = await getById(id);

  return updatedCharacter;

}

const deleteCharacterEpisode = async (characterId, episodeId) => {
  const characterEpisodeExists = await CharacterEpisode.findAll({ where: { episodeId } });
  if (characterEpisodeExists.length <= 1) {
    await Episode.destroy({ where: { id: episodeId } });
  }
  await CharacterEpisode.destroy({ where: { characterId } });
}

const deleteById = async (id, characterEpisodes) => {

  characterEpisodes.forEach(async (episode) => {
    await deleteCharacterEpisode(id, episode.episode_id);
  });

  await Character.destroy({ where: { id } });

}

const getAll = async () => {

  const characters = await Character.findAll({
    include: [
      { model: Episode, as: 'episodes' }
    ]
  });
  characters.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1);
  return characters;
};

const getById = async (id) => {

  const character = await Character.findByPk(id, {
    include: [
      { model: Episode, as: 'episodes' }
    ]
  });

  return character;
};

const getByName = async (name) => {

  const character = await Character.findOne({ where: { name } });

  return character;
};


module.exports = {
  create,
  updateById,
  deleteById,
  getAll,
  getById,
  getByName,
};