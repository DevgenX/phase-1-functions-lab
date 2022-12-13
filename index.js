// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const street = 42;
  //returns the number of blocks given a value
  const distance = street - someValue;

  return Math.abs(distance);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  const distance =
    distanceFromHqInFeet(start) - distanceFromHqInFeet(destination);

  return Math.abs(distance);
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer

  let fare = 0.02;

  const traveled = distanceTravelledInFeet(start, destination);

  if (traveled >= 2500) {
    return "cannot travel that far";
  } else if (traveled >= 2000) {
    return (fare = 25);
  } else if (traveled <= 400) {
    return (fare = 0);
  } else {
    return (fare = (traveled - 400) * fare);
  }
}
