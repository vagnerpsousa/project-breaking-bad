const { default: axios } = require("axios");

const GetCharacterByName = async (name) => {
  const formatName = name.toLowerCase().trim().replace(/\s+/g, '+');
  try {
    const URL = `https://www.breakingbadapi.com/api/characters?name=${formatName}`;
    const request = await axios.get(URL);
    return request.data;
  } catch (err) {
    return res.status(401).json({ message: 'invalid name' });
  }
};

const GetAllEpisodes = async () => {
  try {
    const URL = `https://www.breakingbadapi.com/api/episodes`;
    const request = await axios.get(URL);
    return request.data;
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  GetCharacterByName,
  GetAllEpisodes
};