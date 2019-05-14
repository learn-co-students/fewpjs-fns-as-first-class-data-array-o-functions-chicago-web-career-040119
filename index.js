var wakeDog = function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

var leashDog = function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

var walkToPark = function(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}
 let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
 let copy = [];

 function exerciseDog(dog, breed) {
   return routine.map(x => {
     return x(dog, breed);
   });
 }

// function exerciseDog(dogName, dogBreed) {
//   for (let i = 0; i < routine.length; i++) {
//     copy.push(routine[i](dogName, dogBreed));
//   };
//   return copy;
// };
