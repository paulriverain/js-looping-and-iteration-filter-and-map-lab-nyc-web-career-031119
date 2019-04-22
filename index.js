// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const newList = drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
  return newList
}

function driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers = driversWithRevenueOver(drivers, revenue)
  return newDrivers.map(function(driverName){
    return driverName.name
  })
}

function exactMatch(drivers, attr){
  return drivers.filter(function(driver){
    for(const key in attr){
      return driver[key] === attr[key]
    }
  })
}

function exactMatchToList(drivers, attr){
  return exactMatch(drivers, attr).map(function(driver){
      return driver.name
  })
}
