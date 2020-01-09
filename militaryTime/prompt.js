// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

function militaryTime(timeStr) {
  //write code here here
  timeStr + timeFactor
  const timeFactor = 12;
  const newtime=[];
  //first we check which half of day the time is. If between 1:00am and 11:59am timeStr remains same
  if (timeStr[5] && timeStr[6] === "am"){
  return timeStr;

  } else {
  //we check if time is pm. Here we will need to conver the time by adding our constant timeFactor = 12 an integer to only first two integers of timeStr
  if (timeStr[5] && timeStr[6] === "pm"){
    for(var i=0; i=timeStr.length; i+1) {

      //our timeStr will have format "07:47pm and converted to 19:47"
      return newtime.push(timeStr[i][i+1] + timeFactor).concat(timeStr[5][6])
  }
}
}
}   