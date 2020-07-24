const randomId = require("random-id");

const idLength = 10;
const idPattern = "aA0";

module.exports = () => randomId(idLength, idPattern);
