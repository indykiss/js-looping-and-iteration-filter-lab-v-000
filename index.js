// Code your solution in this file

function findMatching(drivers, word) {
  return drivers.filter(driver => driver.toLowerCase() == word.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.startsWith(string));
}

function matchName(drivers, word) {
  return drivers.filter(driver => driver.name === name);
}
