//FCC: write a prototype that acts like map(): 

Array.prototype.myMap = function(callback){

  var newArray = [];
  this.forEach(x=> newArray.push(callback(x)));
  return newArray;

};

