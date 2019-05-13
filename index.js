

function wakeDog(dogName, dogBreed) {
	let outputString = `Wake ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

function leashDog(dogName, dogBreed) {
	let outputString = `Leash ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

function walkToPark(dogName, dogBreed) {
	let outputString = `Walk to the park with ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

function throwFrisbee(dogName, dogBreed) {
	let outputString = `Throw the frisbee for ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

function walkHome(dogName, dogBreed) {
	let outputString = `Walk home with ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

function unleashDog(dogName, dogBreed) {
	let outputString = `Unleash ${dogName} the ${dogBreed}`
	console.log(outputString)
	return outputString
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
	let output = [];
	routine.forEach(function(subr){
		output.push(subr(dogName, dogBreed));
	});
	return output;
}

