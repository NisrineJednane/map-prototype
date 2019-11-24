//FCC: prototype that acts like map(): 

Array.prototype.myMap = function(callback){

  var newArray = [];
  this.forEach(x=> newArray.push(callback(x)));
  
  /*second method using a for loop:
  
  for (let x=0; x<this.length; x++) {
    newArray.push(callback(this[x]));
  }
  */
  
  return newArray;

};

