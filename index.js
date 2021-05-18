// Code your solution in this file!
const  returnFirstTwoDrivers = (arry) => {
  let  newarry = [arry[0],arry[1]]
    return newarry
}
const  returnLastTwoDrivers = (arry) => {
  let newarry = arry.slice(arry.length - 2)
    return newarry
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = (y) => {
  return function(x) { return x*y}
}

const fareDoubler = (x) => {return x*2}
const fareTripler = (x) => {return x*3}
const selectDifferentDrivers = (drivers, x) => {
  let arry = drivers
  return x(arry)
}