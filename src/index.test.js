const expect = require('chai').expect;
const onepieceNames = require('./index.js');

describe('all', function() {
  it('it should return array of string', function() {
    expect(onepieceNames.all).to.satisfy(isArrayOfString);

    function isArrayOfString(array) {
      return array.every(function(item){
        return typeof item === 'string';
      });
    }
  });

  it('it should contain "Nami"', function() {
    expect(onepieceNames.all).to.include('Nami');
  });

});

describe('random', function() {
  it('should return random item from onepieceNames.all', function() {
    var random = onepieceNames.random();

    expect(onepieceNames.all).to.include(random);
  });
});
