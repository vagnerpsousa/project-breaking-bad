const { GetAllEpisodes } = require('../utils/breakingBadApi');

module.exports = async (name) => {
  const allEpisodes = await GetAllEpisodes();
  const characterEpisodes = [];
  allEpisodes.forEach((episode) => episode.characters.includes(name) ? characterEpisodes.push(episode) : null);
  return characterEpisodes;
}

