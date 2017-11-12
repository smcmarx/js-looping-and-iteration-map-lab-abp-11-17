// Code your solution in this file.
function findMAtching(drivers, name) {
  let matchingDrivers = drivers.filter(function(driver){
    if (name.toLowerCase === driver){
      return true
    } else {
      return false
    }
  })

  return matchingDrivers;
}
