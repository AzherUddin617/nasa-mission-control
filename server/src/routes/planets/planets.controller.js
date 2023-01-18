const { planets } = require('../../models/planets.model');

const getPlanets = async (req, res) => {
    return res.json(planets);
}

module.exports = {
    getPlanets,
};