const uniqueRandomArray = require('unique-random-array');
const onepieceNames = require('./onepiece-names.json');

module.exports = {
  all: onepieceNames,
  random: uniqueRandomArray(onepieceNames)
};
