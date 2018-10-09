const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  if (index !== -1)
    this.dinosaurs.splice(index, 1);
};

Park.prototype.dinosaurWithMostVisitors = function () {
  let dinosaurWithMostVisitors = this.dinosaurs[0];
  for (var dinosaur of this.dinosaurs){
    if(dinosaur.averageVisitorsPerDay > dinosaurWithMostVisitors.averageVisitorsPerDay)
      dinosaurWithMostVisitors = dinosaur;
  }
  return dinosaurWithMostVisitors;
};

Park.prototype.findDinosaursOfSpecies = function (species) {
  let dinosaursOfOneSpecies = [];
  for (var dinosaur of this.dinosaurs){
    if(dinosaur.species == species)
      dinosaursOfOneSpecies.push(dinosaur);
  }
  return dinosaursOfOneSpecies;
};

Park.prototype.totalVisitorsPerDay = function () {
  let totalVisitorsPerDay = 0;
  for (let dinosaur of this.dinosaurs){
    totalVisitorsPerDay += dinosaur.averageVisitorsPerDay;
  }
  return totalVisitorsPerDay;
};

Park.prototype.totalVisitorsPerYear = function () {
  let totalVisitorsPerYear = this.totalVisitorsPerDay() * 365;
  return totalVisitorsPerYear;
};

Park.prototype.totalRevenuePerYear = function () {
  let totalRevenuePerYear = this.totalVisitorsPerYear() * this.ticketPrice;
  return totalRevenuePerYear;
};

Park.prototype.removeDinosaurOfSpecies = function (species) {
  for(let i = this.dinosaurs.length - 1; i >= 0; i--){
    if(this.dinosaurs[i].species == species)
      this.dinosaurs.splice(i, 1);
  }
};

Park.prototype.dinosaursByDietType = function () {
  // result =  { 'Carnivore': 1, 'Herbivore': 2, 'Omnivore': 1};
  let result = {};
  let dietTypes = [];

  //find all the distinct diet types in this.dinosaurs
  for (let dinosaur of this.dinosaurs){
    if(dietTypes.indexOf(dinosaur.diet) === -1)
    dietTypes.push(dinosaur.diet);
  }

  //initialize the result object with zero count of all diet types found above
  for(let key in dietTypes){
    result[dietTypes[key]] = 0;
  }

  //count the totals for each type
  for (let dinosaur of this.dinosaurs){
    for(let key in dietTypes){
      if(dinosaur.diet === dietTypes[key])
        result[dietTypes[key]] += 1;
    }
  }
  return result;
  // return dietTypes;
};

module.exports = Park
