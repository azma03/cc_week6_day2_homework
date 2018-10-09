const assert = require('assert')
const Dinosaur = require('../dinosaur.js')
const Park = require('../park.js')

describe('Park', function(){
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;
  let park;

  beforeEach(function(){
    dinosaur1 = new Dinosaur('Dreadnoughtus', 'Carnivore', 10);
    dinosaur2 = new Dinosaur('Dreadnoughtus', 'Herbivore', 15);
    dinosaur3 = new Dinosaur('Velociraptor', 'Herbivore', 7);
    dinosaur4 = new Dinosaur('Velociraptor', 'Herbivore', 2);
    dinosaur5 = new Dinosaur('Velociraptor', 'Omnivore', 1);
    dinosaur6 = new Dinosaur('Dreadnoughtus', 'Omnivore', 1);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];

    park = new Park('CC Theme Park', 10, dinosaurs);
  })

  it('should have a name', function(){
    actual = park.name;
    assert.strictEqual(actual, 'CC Theme Park');
  });

  it('should have a ticket price', function(){
    actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should count the total dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection of dinosaurs', function(){
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.numberOfDinosaurs(), 4);
  });

  it('should be able to remove a dinosaur to its collection of dinosaurs', function(){
    park.removeDinosaur(dinosaur3);
    assert.strictEqual(park.numberOfDinosaurs(), 2);
  });

  it('should be able to find the dinosaur that attracts the most visitor', function(){
    const actual = park.dinosaurWithMostVisitors();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaursOfSpecies('Dreadnoughtus');
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 32);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 11680);
  });

  it('should be able to calculate the total revenue from ticket sales for one year', function(){
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 116800);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    // park.addDinosaur(dinosaur6);
    park.removeDinosaurOfSpecies('Dreadnoughtus');
    // assert.strictEqual(park.numberOfDinosaurs(), 1);
    assert.deepStrictEqual([dinosaur3], park.dinosaurs);
  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    park.addDinosaur(dinosaur6);
    const actual = park.dinosaursByDietType();
    const expected = { 'Carnivore': 1, 'Herbivore': 2, 'Omnivore': 1}
    assert.deepStrictEqual(actual, expected);
  });

})
