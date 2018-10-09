const assert = require('assert')
const Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Dreadnoughtus', 'Carnivore', 10);
  })

  it('should have a species', function(){
    actual = dinosaur.species;
    assert.strictEqual(actual, 'Dreadnoughtus');
  });

  it('should have a diet', function(){
    actual = dinosaur.diet;
    assert.strictEqual(actual, 'Carnivore');
  });

  it('should have an average number of visitors attracted per day', function(){
    actual = dinosaur.averageVisitorsPerDay;
    assert.strictEqual(actual, 10);
  });

})
